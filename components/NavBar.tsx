"use client"

import { useTheme } from "next-themes"
import { UserIcon, SettingsIcon, LogOutIcon, Sun, Moon} from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "./ui/sidebar"

const NavBar = () => {
    const { setTheme , resolvedTheme} = useTheme()
    return(
        <div className="flex items-center justify-between p-4 w-full">
            {/* right side */}
            <SidebarTrigger/>
            {/* left side */}
            <div className="flex justify-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="cursor-pointer">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="default" className="cursor-pointer">
                            <Avatar size="sm">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuItem><UserIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Profile</DropdownMenuItem>
                            <DropdownMenuItem><SettingsIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Settings</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive"><LogOutIcon className="h-[1.2rem] w-[1.2rem] mr-2" /> Logout</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
    
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export { NavBar }