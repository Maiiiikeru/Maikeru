const nav = document.getElementById('mainNav');
const menuToggle = document.getElementById('menuToggle');
const toast = document.getElementById('toast');
let toastTimer;

document.getElementById('year').textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  if (typeof gtag === 'function') {
    gtag('event', 'navigation_menu_toggle', { menu_open: open });
  }
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

document.querySelectorAll('[data-analytics]').forEach(element => {
  element.addEventListener('click', () => {
    const eventName = element.getAttribute('data-analytics');
    if (typeof gtag === 'function') {
      gtag('event', eventName, { page_section: element.closest('section')?.id || 'header' });
    }
  });
});

document.querySelectorAll('[data-topic]').forEach(card => {
  card.addEventListener('click', () => {
    const topic = card.dataset.topic;
    document.getElementById('selectionMessage').textContent = `Your current interest: ${topic}. Keep exploring!`;
    if (typeof gtag === 'function') {
      gtag('event', 'select_learning_topic', { topic_name: topic });
    }
    showToast(`You selected: ${topic}`);
  });
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('visitorName').value.trim();
  if (typeof gtag === 'function') {
    gtag('event', 'demo_contact_form_submit', { form_name: 'school_project_contact' });
  }
  showToast(`Thanks${name ? ', ' + name : ''}! This is a demo form, so nothing was sent.`);
  event.target.reset();
});
