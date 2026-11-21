// Labels each body cell of a 3- or 4-column Markdown table with its column
// heading, so custom.css can show the rows as stacked cards on phone screens.
// Wider tables are records meant to scroll, so they are left unchanged.

const MIN_COLUMNS = 3;
const MAX_COLUMNS = 4;

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

function childElements(node, tagNames) {
  return (node.children || []).filter(
    (child) => child.type === 'element' && tagNames.includes(child.tagName),
  );
}

function labelTable(table) {
  const sections = childElements(table, ['thead', 'tbody']);
  const head = sections.find((section) => section.tagName === 'thead');
  const headRow = head && childElements(head, ['tr'])[0];
  if (!headRow) return;

  const labels = childElements(headRow, ['th', 'td']).map((cell) => textOf(cell).trim());
  if (labels.length < MIN_COLUMNS || labels.length > MAX_COLUMNS) return;

  table.properties = table.properties || {};
  const className = table.properties.className || [];
  table.properties.className = [...className, 'table--stack'];

  for (const section of sections) {
    if (section.tagName !== 'tbody') continue;
    for (const row of childElements(section, ['tr'])) {
      childElements(row, ['td', 'th']).forEach((cell, index) => {
        cell.properties = cell.properties || {};
        cell.properties.dataLabel = labels[index] || '';
      });
    }
  }
}

function walk(node) {
  if (node.type === 'element' && node.tagName === 'table') labelTable(node);
  for (const child of node.children || []) walk(child);
}

export default function rehypeTableLabels() {
  return (tree) => walk(tree);
}
