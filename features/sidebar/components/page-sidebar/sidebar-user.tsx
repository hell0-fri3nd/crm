import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useIsMobile } from '@/lib/hooks/use-mobile';
import { ChevronsUpDown } from 'lucide-react';
import UserInfo from '../user/user-info';
import UserMenuContent from '../user/user-menu-content';

const SidebarUser = () => {
    // const { user } = useSelector((state: RootState) => state.auth);

    // const auth = {
    //     user: {
    //         name: "Art Lisboa",
    //         email: 'lisboamillen30@gmail.com',
    //         avatar: "",
    //         email_verified_at: true,
    //         created_at: '',
    //         updated_at: ''
    //     }
    // }
    const { state } = useSidebar();
    const isMobile = useIsMobile();
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton size="lg" className="group text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent">
                            <UserInfo 
                            // user={auth.user}
                            />
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        align="end"
                        side={isMobile ? 'bottom' : state === 'collapsed' ? 'left' : 'bottom'}
                    >
                        <UserMenuContent
                        // user={auth.user}
                        />
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default SidebarUser