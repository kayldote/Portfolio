import { useEffect } from "react";

// Animate content blocks as units so text inside a card doesn't reveal twice.
const selector = [
  '.project-file > h1', '.project-file > p', '.project-overview',
  '.pn-intro-banner', '.pn-section-title', '.case-study-section > h2',
  '.pn-section > h3', '.pn-section > p', '.case-study-section p',
  '.pn-card', '.pn-callout', '.pn-test', '.pn-persona', '.pn-big-quote',
  '.pn-screens figure', '.pn-diseases li', '.pn-journey-scrapbook',
  '.pn-hmws > div', '.pn-paper-flow li', '.pn-themes details',
  '.petnest-sketch-file', '.panda-insights-file', '.pn-ending',
  '.panda-participants article', '.panda-decisions article',
  '.panda-product-gallery figure', '.panda-accessibility-check',
  '.panda-audiences > *', '.panda-research-journal', '.panda-research-topics',
  '.panda-reflection-page', '.graphic-design-intro',
  '.graphic-design-project header', '.graphic-project-images figure',
  '.graphic-project-description', '.project-image-gallery > *',
].join(',');

export function ScrollReveals() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.project-file');
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tracked = new Set<HTMLElement>();
    const reveal = (element: HTMLElement) => {
      element.dataset.scrollReveal = 'visible';
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target as HTMLElement); });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    const scan = () => {
      if (preference.matches) return;
      root.querySelectorAll<HTMLElement>(selector).forEach(element => {
        if (tracked.has(element) || element.parentElement?.closest('[data-scroll-reveal]')) return;
        tracked.add(element);
        const rect = element.getBoundingClientRect();
        // Leave content already in view visible, including newly selected tabs.
        if (rect.top < window.innerHeight && rect.bottom > 0) return;
        if (!rect.height || rect.bottom <= 0) return;
        element.style.setProperty('--reveal-delay', `${Math.min(Array.from(element.parentElement?.children || []).indexOf(element) % 4, 3) * 60}ms`);
        element.dataset.scrollReveal = 'pending';
        observer.observe(element);
      });
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) {
        const element = event.target.closest<HTMLElement>('[data-scroll-reveal="pending"]');
        if (element) reveal(element);
      }
    };
    const onPreference = () => {
      if (preference.matches) tracked.forEach(reveal);
    };
    root.addEventListener('focusin', onFocus);
    preference.addEventListener('change', onPreference);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      root.removeEventListener('focusin', onFocus);
      preference.removeEventListener('change', onPreference);
      tracked.forEach(element => { delete element.dataset.scrollReveal; element.style.removeProperty('--reveal-delay'); });
    };
  }, []);
  return null;
}
