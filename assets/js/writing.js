/* Build the writing index and reading page from one shared collection. */
(() => {
  const entries = window.writingEntries || [];
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const collection = document.querySelector('[data-collection="writing"]');
  if (collection) {
    const filters = document.querySelector('[data-filter-group="writing"]');
    const categories = new Map();
    entries.forEach((entry, index) => {
      const category = entry.category || 'Writing';
      const key = category.trim().toLowerCase();
      categories.set(key, category);
      const row = element('article', 'writing-row');
      row.dataset.category = key;
      const meta = element('div', 'row-meta', `${String(index + 1).padStart(2, '0')} `);
      meta.append(element('span', '', category));
      const content = element('div');
      const heading = element('h2');
      const link = element('a', '', `${entry.title} `);
      link.href = `writing/entry.html?id=${encodeURIComponent(entry.id)}`;
      link.append(element('span', '', '↗'));
      heading.append(link);
      content.append(heading);
      if (entry.intro) content.append(element('p', '', entry.intro));
      row.append(meta, content, element('span', 'row-date', entry.date || ''));
      collection.append(row);
    });
    const plurals = { essay: 'Essays', poem: 'Poems', reflection: 'Reflections' };
    categories.forEach((label, key) => {
      const button = element('button', '', plurals[key] || label);
      button.type = 'button';
      button.dataset.filter = key;
      button.setAttribute('aria-pressed', 'false');
      filters.append(button);
    });
    if (!entries.length) {
      ['essay', 'reflection'].forEach((key) => {
        const button = element('button', '', plurals[key]);
        button.type = 'button';
        button.dataset.filter = key;
        button.setAttribute('aria-pressed', 'false');
        filters.append(button);
      });
    }
    document.querySelector('[data-writing-empty]').hidden = entries.length > 0;
  }

  const reader = document.querySelector('[data-writing-reader]');
  if (reader) {
    const id = new URLSearchParams(window.location.search).get('id');
    const entry = entries.find((item) => item.id === id);
    if (!entry) {
      reader.querySelector('h1').textContent = 'Writing not found';
      return;
    }
    document.title = `${entry.title} · Hasti Bargharariyan`;
    document.querySelector('meta[name="description"]').content = entry.intro || entry.title;
    reader.querySelector('.eyebrow').textContent = entry.category || 'Writing';
    reader.querySelector('h1').textContent = entry.title;
    const meta = reader.querySelector('.article-meta');
    meta.textContent = 'Hasti Bargharariyan';
    if (entry.date) meta.append(' ', element('span', '', '·'), ` ${entry.date}`);
    const intro = reader.querySelector('.lede');
    intro.textContent = entry.intro || '';
    intro.hidden = !entry.intro;
    const body = reader.querySelector('.article-body');
    (entry.text || '').trim().split(/\n\s*\n/).filter(Boolean).forEach((paragraph) => {
      const node = element('p', '', paragraph);
      node.style.whiteSpace = 'pre-line';
      body.append(node);
    });
  }
})();
