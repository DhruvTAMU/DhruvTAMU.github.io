document.querySelectorAll('h3').forEach(header => {
  header.addEventListener('click', () => {
    const dropdown = header.parentElement;
    const expanded = dropdown.classList.toggle('open');
    header.setAttribute('aria-expanded', expanded);
  });
});