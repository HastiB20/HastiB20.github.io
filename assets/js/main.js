/* Progressive enhancement: navigation and collections remain usable without JavaScript. */
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (menuButton && navigation) {
  const phoneLayout = window.matchMedia('(max-width: 600px)');
  const menuLabel = document.querySelector('.menu-label');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.hidden = phoneLayout.matches;
  };
  const syncNavigation = () => {
    menuButton.hidden = !phoneLayout.matches;
    if (menuLabel) menuLabel.hidden = phoneLayout.matches;
    closeMenu();
  };
  syncNavigation();
  phoneLayout.addEventListener('change', syncNavigation);
  menuButton.addEventListener('click', () => {
    if (!phoneLayout.matches) return;
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.hidden = expanded;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && phoneLayout.matches && !navigation.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a') && phoneLayout.matches) closeMenu();
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
