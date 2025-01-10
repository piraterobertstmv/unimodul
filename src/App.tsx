import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Models from "./pages/Models";
import Stories from "./pages/Stories";
import SuccessStory1 from "./pages/SuccessStory1";
import SuccessStory2 from "./pages/SuccessStory2";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Process from "./pages/Process";
import ModStudio from "./pages/ModStudio";
import ModOne from "./pages/ModOne";
import ModTwo from "./pages/ModTwo";
import Particulares from "./pages/Particulares";
import Campings from "./pages/Campings";
import Empresas from "./pages/Empresas";
import Inversores from "./pages/Inversores";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
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

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/modelos" element={<Models />} />
            <Route path="/productos/mod-studio" element={<ModStudio />} />
            <Route path="/productos/mod-one" element={<ModOne />} />
            <Route path="/productos/mod-two" element={<ModTwo />} />
            <Route path="/historias" element={<Stories />} />
            <Route path="/historia-1" element={<SuccessStory1 />} />
            <Route path="/historia-2" element={<SuccessStory2 />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/proceso" element={<Process />} />
            <Route path="/particulares" element={<Particulares />} />
            <Route path="/campings" element={<Campings />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/inversores" element={<Inversores />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;