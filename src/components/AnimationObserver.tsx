import { useEffect, useCallback } from "react";

export const AnimationObserver = () => {
  const setupIntersectionObserver = useCallback(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    document.querySelectorAll('.section-transition').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setupIntersectionObserver();

    const routeChangeHandler = () => {
      setTimeout(setupIntersectionObserver, 300);
    };

    window.addEventListener('popstate', routeChangeHandler);
    
    const intervalId = setInterval(setupIntersectionObserver, 2000);

    return () => {
      window.removeEventListener('popstate', routeChangeHandler);
      clearInterval(intervalId);
    };
  }, [setupIntersectionObserver]);

  return null;
};