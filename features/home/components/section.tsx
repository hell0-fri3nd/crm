import React from 'react'
import { SectionProps } from '../types'

const Section = ({children,header,description} : SectionProps) => {
    return (
        <section className="min-h-screen border-b border-border flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="space-y-3">

                    <h1 className="text-3xl md:text-5xl font-bold text-foreground">
                        {/* Manage deals, contacts, and notes in one place */}
                        {header}
                    </h1>
                    <p className="text-lg text-l text-muted-foreground max-w-xl mx-auto text-balance">
                        {/* A simple CRM to keep your pipeline clear, your contacts organized,
                        and your follow-ups on track. Get started in seconds. */}
                        {description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        {children}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section