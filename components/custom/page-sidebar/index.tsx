import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import AppLogo from "../app-logo"
import { SidebarGroupProps } from "@/components/types/sidebarProps"
import SidebarGroupItems from "./sidebar-group-items"
import SidebarUser from "./sidebar-user"

const PageSidebar = ({ items, title } : SidebarGroupProps) => {
  return ( 
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/pages/">
                <AppLogo title={title}/>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroupItems items={items} name="Main" />
      </SidebarContent>

      <SidebarFooter>
        {/* <SidebarFooterItems items={footerSidebarItems} className="mt-auto" /> */}
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  )
}

export default PageSidebar