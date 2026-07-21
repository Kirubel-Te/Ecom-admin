"use client";

import { ScrollArea } from "./ui/scroll-area";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);

    return(
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger render={<Button variant="outline" className="w-full justify-start text-left font-normal"/>}>
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                        setDate(date);
                        setOpen(false);
                        }}
                    />
                </PopoverContent>
            </Popover>
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto rounded-md border">
                <div className="flex flex-col gap-4 ">
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
          {/* LIST ITEM */}
                    <Card className="p-4">
                        <div className="flex items-center gap-4">
                            <Checkbox id="item1" checked />
                            <label htmlFor="item1" className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export { TodoList }