import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@components/toaster";
import { TooltipProvider } from "@components/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Properties from "@/pages/properties";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import About from "@/pages/about";
import PropertyDetails from "@/pages/property-details";
import Plans from "@/pages/plans";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/properties" component={Properties} />
      <Route path="/projects" component={Projects} />
      <Route path="/plans" component={Plans} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      <Route path="/property/:id" component={PropertyDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
