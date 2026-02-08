import { Button } from '@/components/ui/button'
import { columns } from '@/features/contact/components/data-table/columns'
import { DataTable } from '@/features/contact/components/data-table'
import { UserRoundPlus } from 'lucide-react'


const page = async () => {

    return (
        <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
            <div className="mx-auto w-full max-w-6xl flex flex-col gap-4">
                
                <div className="flex flex-row items-center justify-between gap-2">
                    <h3 className="text-2xl font-semibold tracking-tight">
                    {/* Contacts */}
                    </h3>

                    <Button
                    className="h-10 w-10 
                    h-auto w-auto p-0 px-4 py-2 bg-primary justify-start gap-2
                    hover:bg-primary/90 
                    text-primary-foreground 
                    flex items-center justify-center">
                        <UserRoundPlus className="h-6 w-6 flex-shrink-0" />
                        <span >
                            Create Contacts
                        </span>
                    </Button>
                </div>

                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-0 overflow-x-auto">
                    <DataTable columns={columns} data={[]} />
                </div>
        
            </div>
        </div>
    )
}

export default page
