"use client";

import PageSidebar from "@/components/custom/page-sidebar"
import Footer from "@/features/footer/components/footer"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import sidebarItems from "@/components/types/sidebarProps"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <PageSidebar  items={sidebarItems} title="CRM"/>
      <SidebarInset>
        <div className="flex-1 overflow-auto">{children}</div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  )
}
