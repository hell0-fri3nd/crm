import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import UserInfo from './user-info'
import Link from 'next/link'
import { LogOut } from 'lucide-react'

const UserMenuContent = () => {
  return (
    <div>
        <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserInfo 
                // user={user} showEmail={true} 
                />
            </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem asChild>
            <Link href='/'>
                <LogOut className="mr-2" />
                Log out
            </Link>
        </DropdownMenuItem>
    </div>
  )
}

export default UserMenuContent