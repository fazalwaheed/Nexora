import type { ReactNode } from "react";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BackToTop } from "./BackToTop";
import { WhatsAppFab } from "./WhatsAppFab";
import { GradientOrbs } from "./GradientOrbs";

export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="dark min-h-screen relative">
      <GradientOrbs />
      <Navbar />
      <main className="pt-16">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFab />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
