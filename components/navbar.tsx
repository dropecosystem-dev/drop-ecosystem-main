import Link from "next/link";
import { Droplets } from "lucide-react";

export function Navbar() {
    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container flex h-14 items-center px-4 md:px-8 lg:px-16">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Droplets className="h-6 w-6" />
                    <span className="font-bold text-lg hidden sm:inline-block">
                        Drop Ecosystem
                    </span>
                    <span className="font-bold text-lg sm:hidden">
                        Drop
                    </span>
                </Link>
                {/* Add more nav items here if needed */}
            </div>
        </nav>
    );
}
