
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HashProvider } from "./contexts/HashContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KundenservicePage from "./pages/KundenservicePage";
import HrItSupportPage from "./pages/HrItSupportPage";
import ECommercePage from "./pages/ECommercePage";
import FinanzdienstleistungenPage from "./pages/FinanzdienstleistungenPage";
import BehoerdenPage from "./pages/BehoerdenPage";
import BildungPage from "./pages/BildungPage";
import NewsOverviewPage from "./pages/NewsOverviewPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

// Log that App component is rendering
console.log("App component is rendering");

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="h-full w-full overflow-x-hidden">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <HashProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/direkter-zugriff-auf-ausgewaehlte-microsoft-365-dokumente-ueber-typo3" element={<KundenservicePage />} />
                <Route path="/zentrale-datenspeicherung-mit-sptools" element={<HrItSupportPage />} />
                <Route path="/sptools-terminbuchungsloesung" element={<ECommercePage />} />
                <Route path="/workflow-automatisierung" element={<FinanzdienstleistungenPage />} />
                <Route path="/sptools-echtzeitkommunikation" element={<BehoerdenPage />} />
                <Route path="/sptools-bewerbermanagement" element={<BildungPage />} />
                
                {/* News-Seiten */}
                <Route path="/news" element={<NewsOverviewPage />} />
                <Route path="/news/:id" element={<NewsDetailPage />} />
                
                {/* Legacy routes with redirects */}
                <Route path="/kundenservice" element={<Navigate to="/direkter-zugriff-auf-ausgewaehlte-microsoft-365-dokumente-ueber-typo3" replace />} />
                <Route path="/hr-it-support" element={<Navigate to="/zentrale-datenspeicherung-mit-sptools" replace />} />
                <Route path="/ecommerce" element={<Navigate to="/sptools-terminbuchungsloesung" replace />} />
                <Route path="/finanzdienstleistungen" element={<Navigate to="/workflow-automatisierung" replace />} />
                <Route path="/behoerden" element={<Navigate to="/sptools-echtzeitkommunikation" replace />} />
                <Route path="/bildung" element={<Navigate to="/sptools-bewerbermanagement" replace />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HashProvider>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
