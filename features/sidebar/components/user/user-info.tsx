
// import { useInitials } from '../hooks/use-initials';
// import type { User } from '../types/index';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const UserInfo = () => {
    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    AL
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Art Lisboa</span>
                {/* {showEmail && <span className="truncate text-xs text-muted-foreground">{user.email}</span>} */}
                <span className="truncate text-xs text-muted-foreground">lisboamillen30@gmail</span>
            </div>
        </>
    )
}

export default UserInfo