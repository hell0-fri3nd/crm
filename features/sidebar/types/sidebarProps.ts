import { Camera, LayoutGrid, Logs, LucideIcon } from "lucide-react";

export interface SidebarItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SidebarGroupProps {
    items: SidebarItem[]; 
    footerSidebarItems?: SidebarFooterItem[]
    title?: string;
    name?: string;
}

export interface SidebarFooterItem {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }> // Compatible with lucide-react icons
}

export interface SidebarFooterItemsProps {
  items?: SidebarFooterItem[],
  className?: string
}


const sidebarItems: SidebarItem[] = [
    
    {
        title: 'Dashboard',
        href: '/page/',
        icon: LayoutGrid,
    },
    {
        title: 'Contacts',
        href: '/page/contacts',
        icon: Logs,
    },
    {
        title: 'Deals',
        href: '/page/deals',
        icon: Camera,
    }
];

// export const footerNavItems: SidebarItem[] = [
//     {
//         title: 'Controller`s Shedule',
//         href: '/settings/controllers-shedule',
//         icon: ClipboardClock,
//     },
//     {
//         title: 'User Management',
//         href: '/settings/users-settings',
//         icon: UserCog,
//     },
// ];

export default sidebarItems