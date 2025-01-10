import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add Intersection Observer
const observerCallback: IntersectionObserverCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
};

const observerOptions = {
  threshold: 0.1
};

// Create observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Start observing elements after the app is mounted
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  () => {
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }
);