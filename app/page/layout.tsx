"use client";

import PageSidebar from "@/features/sidebar/components/page-sidebar"
import Footer from "@/features/footer/components/footer"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import sidebarItems from "@/features/sidebar/types/sidebarProps"
import SidebarHeader from "@/features/sidebar/components/page-sidebar/sidebar-header";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PageSidebar items={sidebarItems} title="CRM"/>
      <SidebarInset>
        <SidebarHeader/>
        <div className="flex-1 overflow-auto">{children}</div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
