
import Link from "next/link";
import { HeaderProps } from "../types";


const Header = ({ children,title } : HeaderProps) => {
    return (
        <header
        className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        role="banner">

            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            
                <Link href="/"
                className="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-90 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md">
                    <span className="text-xl tracking-tight">{title}</span>
                </Link>

                <nav className="flex items-center gap-2 sm:gap-4" > {children}</nav>
            </div>
        </header>
    )
}

export default Header