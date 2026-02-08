// import { Fragment } from 'react'
import { usePathname } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';

const SidebarHeader = () => {

    const pathname = usePathname(); 
    const raw = pathname?.split('/page/')[1]?.split('/')[0] ?? 'dashboard';
    const pageTitle = raw.charAt(0).toUpperCase() + raw.slice(1);
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                    <h3 className="text-2xl font-semibold tracking-tight">{pageTitle}
                </h3>
            </div>
        </header>
    );
}

export default SidebarHeader