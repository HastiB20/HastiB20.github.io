/* Progressive enhancement: navigation and collections remain usable without JavaScript. */
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
}
for (const group of document.querySelectorAll('[data-filter-group]')) {
  const collection = document.querySelector(`[data-collection="${group.dataset.filterGroup}"]`);
  if (!collection) continue;
  group.hidden = false;
  const status = document.createElement('p');
  status.className = 'content-note filter-status';
  status.setAttribute('role', 'status');
  collection.after(status);
  group.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    group.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    for (const item of collection.querySelectorAll('[data-category]')) {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
      if (!item.hidden) visible++;
    }
    status.textContent = `${visible} ${visible === 1 ? 'item' : 'items'} shown`;
  });
}
