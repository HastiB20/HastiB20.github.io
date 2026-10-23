/* Build the gallery and its category buttons from one shared collection. */
(() => {
  const collection = document.querySelector('[data-collection="pictures"]');
  const filters = document.querySelector('[data-filter-group="pictures"]');
  if (!collection || !filters) return;
  const entries = window.pictureEntries || [];
  const categories = new Map();
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  entries.forEach((entry, index) => {
    const category = (entry.category || 'Everyday').trim() || 'Everyday';
    const key = category.toLowerCase();
    categories.set(key, category);
    const figure = element('figure', 'gallery-item');
    figure.dataset.category = key;
    const photo = element('img', 'gallery-photo');
    photo.src = `assets/images/${entry.file.split('/').map(encodeURIComponent).join('/')}`;
    photo.alt = entry.alt || entry.caption || '';
    photo.loading = 'lazy';
    photo.decoding = 'async';
    const caption = element('figcaption');
    caption.append(
      element('span', '', entry.caption || ''),
      element('span', '', String(index + 1).padStart(2, '0')),
    );
    figure.append(photo, caption);
    collection.append(figure);
  });
  // Preserve the existing filter labels while the gallery is empty.
  if (!entries.length) {
    ['Everyday', 'Places', 'Hobbies'].forEach((category) => {
      categories.set(category.toLowerCase(), category);
    });
  }
  categories.forEach((label, key) => {
    const button = element('button', '', label);
    button.type = 'button';
    button.dataset.filter = key;
    button.setAttribute('aria-pressed', 'false');
    filters.append(button);
  });
})();
