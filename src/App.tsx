
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Funcionalidades from "./pages/Funcionalidades";
import Ventajas from "./pages/Ventajas";
import Soluciones from "./pages/Soluciones";
import Recursos from "./pages/Recursos";
import Contacto from "./pages/Contacto";
import BotAtencionCliente from "./pages/BotAtencionCliente";
import CrmWhatsapp from "./pages/CrmWhatsapp";

import NotFound from "./pages/NotFound";
import BotWhatsapp from "./pages/BotWhatsapp";
import Campanas from "./pages/Campanas";
import Pbx from "./pages/Pbx";
import Numeros from "./pages/Numeros";
import Esim from "./pages/Esim";

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
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/ventajas" element={<Ventajas />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/bot-atencion-cliente" element={<BotAtencionCliente />} />
          <Route path="/crm-whatsapp" element={<CrmWhatsapp />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Rutas de soluciones */}
          <Route path="/bot" element={<BotWhatsapp />} />
          <Route path="/campanas" element={<Campanas />} />
          <Route path="/pbx" element={<Pbx />} />
          <Route path="/numeros" element={<Numeros />} />
          <Route path="/esim" element={<Esim />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
