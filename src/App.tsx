import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Routes, Route } from "react-router-dom";
import Main from "./routes/Students";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
  return (
    <div className="max-h-[97vh]">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
          <div className="p-5 flex justify-between">
            <SidebarTrigger />
            <ModeToggle />
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </SidebarProvider>
    </ThemeProvider>
    </div>
  );
};

export default App;
