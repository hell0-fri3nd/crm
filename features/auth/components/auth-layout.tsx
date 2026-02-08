import React from 'react'
import { AuthLayoutProps } from '../types'


const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-large scroll-m-20 border-b pb-2 md:text-2xl font-semibold tracking-tight first:mt-0 md:whitespace-nowrap">{title}</h1>
                            <p className="text-center text-medium text-muted-foreground">{description}</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthLayout