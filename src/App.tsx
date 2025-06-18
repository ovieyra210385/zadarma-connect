
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          {/* Placeholder routes for future pages */}
          <Route path="/funcionalidades" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Funcionalidades</h1><p className="text-xl">Página en construcción</p></div></div>} />
          <Route path="/ventajas" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Ventajas</h1><p className="text-xl">Página en construcción</p></div></div>} />
          <Route path="/soluciones" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Soluciones</h1><p className="text-xl">Página en construcción</p></div></div>} />
          <Route path="/recursos" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Recursos</h1><p className="text-xl">Página en construcción</p></div></div>} />
          <Route path="/contacto" element={<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"><div className="text-center"><h1 className="text-4xl font-bold mb-4">Contacto</h1><p className="text-xl">Página en construcción</p></div></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
