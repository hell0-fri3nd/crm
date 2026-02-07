'use client';

import {  SidebarGroupProps } from '@/components/types/sidebarProps';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarGroupItems = ({ items = [], name } : SidebarGroupProps) => {
    const pathname = usePathname(); 
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarGroupLabel>{name}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={pathname.startsWith(item.href) ?? "Dashboard"}  tooltip={{ children: item.title }}>
                            <Link href={item.href} className="flex items-center gap-2">
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default SidebarGroupItems