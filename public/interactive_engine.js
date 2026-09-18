// Cofounder Drake Interactive Animation & Micro-Interactions Engine
(function () {
  console.log("⚡ Cofounder Interactive Engine Initialized");

  document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. CHAPTER BOOKS SLIDE-UP GLASS POCKET HOVER ANIMATION ---
    const bookLinks = document.querySelectorAll('a[href^="/how-to/"]');
    
    bookLinks.forEach((link) => {
      // Find the inner book element inside the link
      const bookBox = link.querySelector('.flex.items-stretch') || link.querySelector('div[style*="background:#FAFAF7"]');
      const arrowIcon = link.querySelector('svg');
      
      if (bookBox) {
        bookBox.style.transition = "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s cubic-bezier(0.23, 1, 0.32, 1)";
        
        link.addEventListener('mouseenter', function () {
          bookBox.style.transform = "translateY(-26px) scale(1.025) rotate(-0.5deg)";
          bookBox.style.boxShadow = "0 24px 48px -12px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)";
          if (arrowIcon) {
            arrowIcon.style.transform = "translateX(6px)";
          }
        });

        link.addEventListener('mouseleave', function () {
          bookBox.style.transform = "translateY(0px) scale(1) rotate(0deg)";
          bookBox.style.boxShadow = "0 2px 1px 0 #FFF inset, 0 0 0 0.931px rgba(0,0,0,0.08), 0 4px 8px 0 rgba(0,0,0,0.03)";
          if (arrowIcon) {
            arrowIcon.style.transform = "translateX(0px)";
          }
        });
      }
    });

    // --- 2. HERO FLOATING NOTIFICATION STACK ANIMATION ---
    const notifContainer = document.querySelector('.hero-notif-stack-list');
    if (notifContainer) {
      const notifMessages = [
        { agent: 'Engineering Agent', text: 'Merged PR #142: Authentication & Rate Limit', color: 'text-emerald-400' },
        { agent: 'Sales Agent', text: 'Qualified & scheduled demo with Enterprise buyer', color: 'text-blue-400' },
        { agent: 'Finance Agent', text: 'Reduced monthly AWS infra spend by $3,400', color: 'text-amber-400' },
        { agent: 'Marketing Agent', text: 'Published Product Launch announcement on X', color: 'text-purple-400' },
        { agent: 'Operations Agent', text: 'SOC 2 Security Policy Compliance verified 100%', color: 'text-cyan-400' }
      ];

      let currentIndex = 0;

      function addNotification() {
        const item = notifMessages[currentIndex];
        currentIndex = (currentIndex + 1) % notifMessages.length;

        const notifEl = document.createElement('div');
        notifEl.className = 'hero-notif-wrap opacity-0 transition-all duration-500 transform translate-y-4';
        notifEl.innerHTML = `
          <div class="hero-notif-pop p-3 rounded-[10px] glass-pill border border-white/20 backdrop-blur-xl bg-black/60 text-white shadow-2xl flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-mono font-semibold ${item.color}">${item.agent}</span>
            </div>
            <span class="text-[11px] font-mono text-white/90 truncate">${item.text}</span>
          </div>
        `;

        notifContainer.appendChild(notifEl);

        // Animate entry
        setTimeout(() => {
          notifEl.classList.remove('opacity-0', 'translate-y-4');
          notifEl.classList.add('opacity-100', 'translate-y-0');
        }, 50);

        // Keep maximum 4 items
        if (notifContainer.children.length > 4) {
          const firstChild = notifContainer.children[0];
          firstChild.classList.add('opacity-0', '-translate-y-4');
          setTimeout(() => {
            if (firstChild.parentNode) {
              firstChild.parentNode.removeChild(firstChild);
            }
          }, 500);
        }
      }

      // Initial items
      addNotification();
      addNotification();
      addNotification();

      // Cycle every 3.5s
      setInterval(addNotification, 3500);
    }

    // --- 3. SCROLL-DRIVEN PARALLAX CLOUD MOVEMENT ---
    const cloudBg = document.querySelector('[src*="section-bg"], .guide-books-bg, [class*="carousel"]');
    if (cloudBg) {
      window.addEventListener('scroll', function () {
        const scrolled = window.scrollY;
        cloudBg.style.transform = `translate3d(0px, ${scrolled * 0.04}px, 0px)`;
      }, { passive: true });
    }

    // --- 4. 3D CURSOR TILT ON FOOTER SUNFLOWER CARD ---
    const tiltCards = document.querySelectorAll('.footer-card-2-tilt, [class*="tilt"], [src*="Holo-bg-card"]');
    tiltCards.forEach(card => {
      const targetBox = card.closest('div') || card;
      targetBox.style.transition = 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)';
      targetBox.style.transformStyle = 'preserve-3d';

      targetBox.addEventListener('mousemove', function (e) {
        const rect = targetBox.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        targetBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
      });

      targetBox.addEventListener('mouseleave', function () {
        targetBox.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });

  });
})();
