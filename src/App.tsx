import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { AnimationObserver } from "./components/AnimationObserver";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Models = lazy(() => import("./pages/Models"));
const Stories = lazy(() => import("./pages/Stories"));
const SuccessStory1 = lazy(() => import("./pages/SuccessStory1"));
const SuccessStory2 = lazy(() => import("./pages/SuccessStory2"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Process = lazy(() => import("./pages/Process"));
const ModStudio = lazy(() => import("./pages/ModStudio"));
const ModOne = lazy(() => import("./pages/ModOne"));
const ModTwo = lazy(() => import("./pages/ModTwo"));
const ModLibre = lazy(() => import("./pages/ModLibre"));
const Particulares = lazy(() => import("./pages/Particulares"));
const Campings = lazy(() => import("./pages/Campings"));
const Empresas = lazy(() => import("./pages/Empresas"));
const Inversores = lazy(() => import("./pages/Inversores"));
const Designer = lazy(() => import("./pages/Designer"));
const Financiacion = lazy(() => import("./pages/Financiacion"));
const FinanciacionEmpresas = lazy(() => import("./pages/FinanciacionEmpresas"));
const FinanciacionParticulares = lazy(() => import("./pages/FinanciacionParticulares"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      meta: {
        onError: (error: Error) => {
          console.error('Query error:', error);
        },
      },
    },
  },
});

const App = () => {
  console.log('App component rendering');

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <AnimationObserver />
          <Toaster />
          <Sonner />
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/modelos" element={<Models />} />
              <Route path="/productos/mod-studio" element={<ModStudio />} />
              <Route path="/productos/mod-one" element={<ModOne />} />
              <Route path="/productos/mod-two" element={<ModTwo />} />
              <Route path="/productos/mod-libre" element={<ModLibre />} />
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
              <Route path="/designer" element={<Designer />} />
              <Route path="/financiacion" element={<Financiacion />} />
              <Route path="/financiacion-empresas" element={<FinanciacionEmpresas />} />
              <Route path="/financiacion-particulares" element={<FinanciacionParticulares />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
