"""Reading-load metrics for Markdown pages: words, internal links per 100 words, backticked terms in prose, longest sentence, and retired routing vocabulary. Usage: python3 scripts/measure-reading.py docs [--pages]"""
import re,glob,sys,os
ROUTING=r'\b(path|paths|route|routes|track|tracks|five conditions|fifth condition|urgent adopter|regular adopter)\b'
def clean(t):
    t=re.sub(r'^---.*?---','',t,flags=re.S)
    return t.split('\n## Sources')[0]
def metrics(text):
    body=clean(text)
    prose=re.sub(r'```.*?```','',body,flags=re.S)
    prose_nt='\n'.join(l for l in prose.split('\n') if not l.lstrip().startswith('|'))
    nolink=re.sub(r'\]\([^)]*\)',']',body)
    words=len(re.findall(r"[A-Za-z0-9][\w'-]*",nolink))
    links=len(re.findall(r'\]\(/',body))+len(re.findall(r'\]\(\.',body))
    ticks=len(re.findall(r'`[^`\n]+`',prose_nt))
    sents=[s for s in re.split(r'(?<=[.!?;:])\s+|\n',re.sub(r'\]\([^)]*\)',']',prose_nt)) if s.strip()]
    longest=max((len(s.split()) for s in sents),default=0)
    routing=len(re.findall(ROUTING,body,re.I))
    return dict(words=words,links=links,lp100=round(100*links/max(words,1),1),ticks=ticks,longest=longest,routing=routing)
def words_until(path,marker):
    t=clean(open(path).read()); i=t.find(marker)
    return metrics(t[:i] if i>=0 else t)['words']
if __name__=='__main__':
    root=sys.argv[1]; rows=[]
    for f in sorted(glob.glob(root+'/**/*.md',recursive=True)):
        m=metrics(open(f).read()); m['page']=os.path.relpath(f,root)[:-3]; rows.append(m)
    sec={}
    for r in rows: sec.setdefault(r['page'].split('/')[0] if '/' in r['page'] else '(root)',[]).append(r)
    print('| Section | Pages | Words | Links per 100 words | Backticked terms | Routing vocabulary | Longest sentence |\n|---|--:|--:|--:|--:|--:|--:|')
    T=dict(p=0,w=0,l=0,t=0,r=0)
    for k,v in sec.items():
        w=sum(r['words'] for r in v); l=sum(r['links'] for r in v)
        print(f"| {k} | {len(v)} | {w} | {100*l/max(w,1):.1f} | {sum(r['ticks'] for r in v)} | {sum(r['routing'] for r in v)} | {max(r['longest'] for r in v)} |")
        T['p']+=len(v);T['w']+=w;T['l']+=l;T['t']+=sum(r['ticks'] for r in v);T['r']+=sum(r['routing'] for r in v)
    print(f"| **All** | {T['p']} | {T['w']} | {100*T['l']/max(T['w'],1):.1f} | {T['t']} | {T['r']} | |")
    if '--pages' in sys.argv:
        print('\n| Page | Words | Links per 100 words | Backticked | Longest sentence | Routing |\n|---|--:|--:|--:|--:|--:|')
        for r in sorted(rows,key=lambda r:-r['routing'])[:20]:
            print(f"| {r['page']} | {r['words']} | {r['lp100']} | {r['ticks']} | {r['longest']} | {r['routing']} |")
