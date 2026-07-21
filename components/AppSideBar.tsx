import {Home, Inbox, Calendar, Settings, Search, User, ChevronUp, User2, Plus, Projector} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sidebar, SidebarContent, SidebarHeader,SidebarFooter, SidebarGroupLabel, SidebarGroup, SidebarGroupContent, SidebarMenuItem, SidebarMenuButton, SidebarMenu, SidebarSeparator, SidebarGroupAction } from "./ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible"



const AppSideBar = () => {
    const items = [
        {
            title: "Home",
            url: "/",
            icon: Home,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
        },
        {
            title: "Calendar",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
        {
            title:"Search",
            url:"#",
            icon: Search,
        }
    ]
    return(
        <div>
            <Sidebar collapsible="icon">
                <SidebarHeader className="py-4">
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link href="/" className="flex items-center gap-3">
                                    <Avatar size="s">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <span className="text-md py-5">Admin</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarSeparator/>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-xs uppercase text-muted-foreground py-2">
                            Application
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton>
                                            <Link href={item.url} className="flex items-center gap-1">
                                                <item.icon className="mr-2 h-4 w-4" />
                                                {item.title}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                        <SidebarGroupLabel className="text-xs uppercase text-muted-foreground py-2">
                            Projects
                        </SidebarGroupLabel>
                        <SidebarGroupAction>
                            <Plus />
                            <span className="sr-only">Add Project</span>
                        </SidebarGroupAction>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton render={<div/>}>
                                        <Link href="#" className="flex items-center gap-3">
                                            <Projector/>
                                            See All Projects
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                            <SidebarMenu>
                                <SidebarMenuItem>
                                    <SidebarMenuButton render={<div/>}>
                                        <Link href="#" className="flex items-center gap-3">
                                            <Plus/>
                                            Add New Project
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <Collapsible>
                        <SidebarGroup>
                            <SidebarGroupLabel render = {<div/>}className="text-xs uppercase text-muted-foreground py-2">
                                <CollapsibleTrigger className="flex items-center gap-2">
                                    <span>More</span>
                                    <ChevronUp className="ml-auto h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180"/>
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton>
                                                <Link href="#" className="flex items-center gap-2">
                                                    <User/>
                                                    User Management
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem className="w-full">
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <SidebarMenuButton className="w-full" render={<div/>}>
                                        <User2/> 
                                        <span>Jon Doe</span> 
                                        <ChevronUp className="ml-auto"/>
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent sideOffset={10} align="end">
                                    <DropdownMenuItem>
                                        Account
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem variant="destructive">
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}

export { AppSideBar }