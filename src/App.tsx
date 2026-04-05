
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import XmlSchema from "./pages/XmlSchema";
import XmlSchemaLanding from "./pages/XmlSchemaLanding";
import NotFound from "./pages/NotFound";

const App = () => (
  <ThemeProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* HashRouter works better with GitHub Pages for SPA routing */}
      <HashRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Index />
            } 
          />
          <Route
            path="/xml"
            element={
              <Layout>
                <XmlSchemaLanding />
              </Layout>
            }
          />          
          <Route
            path="/xml/:file"
            element={
              <Layout>
                <XmlSchema />
              </Layout>
            }
          />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
