document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    if (!navbar) {
      console.error('Navbar element not found!');
      return;
    } else {
      console.log('Navbar element found:', navbar);
    }
  
    function checkScroll() {
      const scrollPosition = window.scrollY;
      const isAtTop = scrollPosition <= 1;
      
      console.log('📜 Scroll position:', scrollPosition);
      console.log('🏆 Is at top:', isAtTop);
      
      navbar.classList.toggle('force-open', isAtTop);
    }
  
    // Initial check
    checkScroll();
    
    // Throttled scroll handler
    let isScrolling;
    window.addEventListener('scroll', () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(checkScroll, 3);
    });
  
    // Log when classes change
    const observer = new MutationObserver(() => {
      console.log('🎨 Current classes:', navbar.className);
    });
    observer.observe(navbar, { attributes: true });
  });