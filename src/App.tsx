import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "@/contexts/AudioContext";
import GlobalAudioPlayer from "@/components/GlobalAudioPlayer";
import ChatBot from "@/components/ChatBot";
import Index from "./pages/Index";
import Actualites from "./pages/Actualites";
import Article from "./pages/Article";
import Podcast from "./pages/Podcast";
import Campaigns from "./pages/Campaigns";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Partners from "./pages/Partners";
import NationalPartners from "./pages/NationalPartners";
import InternationalPartners from "./pages/InternationalPartners";
import Fondateur from "./pages/Fondateur";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AudioProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/article/:slug" element={<Article />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/nos-campagnes" element={<Campaigns />} />
            <Route path="/partenaires" element={<Partners />} />
            <Route path="/partenaires/nationaux" element={<NationalPartners />} />
            <Route path="/partenaires/internationaux" element={<InternationalPartners />} />
            <Route path="/fondateur" element={<Fondateur />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <GlobalAudioPlayer />
          <ChatBot />
        </BrowserRouter>
      </AudioProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;