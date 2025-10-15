function showSection(id) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(sec => {
    if (sec.id === id) sec.classList.remove('hidden');
    else sec.classList.add('hidden');
  });

  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
