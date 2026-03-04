document.addEventListener('DOMContentLoaded', function() {
  // Example: Toggle navigation menu on mobile
  const menuToggle: HTMLElement | null = document.querySelector('.menu-toggle');
  const navMenu: HTMLElement | null = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Example: Smooth scroll to sections
  const scrollLinks: NodeListOf<Element> = document.querySelectorAll('.scroll-link');

  if (scrollLinks) {
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(e: Event) {
        e.preventDefault();
        const targetId: string = (this as HTMLAnchorElement).getAttribute('href')!.substring(1);
        const targetElement: HTMLElement | null = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Example: Dynamic content loading
  const loadMoreButton: HTMLElement | null = document.querySelector('.load-more');
  const contentContainer: HTMLElement | null = document.querySelector('.content-container');

  if (loadMoreButton && contentContainer) {
    loadMoreButton.addEventListener('click', function() {
      // Simulate loading more content
      const newContent: HTMLElement = document.createElement('div');
      newContent.className = 'new-content';
      newContent.textContent = sanitizeContent('More content loaded');
      contentContainer.appendChild(newContent);
    });
  }

  // Simple sanitization function to prevent XSS
  function sanitizeContent(content: string): string {
    const tempDiv: HTMLElement = document.createElement('div');
    tempDiv.textContent = content;
    return tempDiv.innerHTML;
  }
});

export { sanitizeContent };