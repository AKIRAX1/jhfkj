const navLinks = document.querySelectorAll('header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const linkClass = link.getAttribute('class');
    const sections = document.querySelectorAll('main section');

    sections.forEach(section => {
      section.style = ''; // Add this line

      const sectionClassList = section.classList;
      if (sectionClassList.contains(linkClass)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});