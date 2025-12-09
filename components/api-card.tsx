"use client";

import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ApiCardProps {
    title: string;
    category: string;
    description: string;
    Icon: LucideIcon;
    iconColor?: string; // e.g. "text-orange-500"
    iconBg?: string;    // e.g. "bg-orange-100"
    comingSoon?: boolean;
    href?: string;
}

export function ApiCard({
    title,
    category,
    description,
    Icon,
    iconColor = "text-foreground",
    iconBg = "bg-muted",
    comingSoon = false,
    href = "#",
}: ApiCardProps) {
    const [isTapped, setIsTapped] = useState(false);

    return (
        <Card
            className="group relative flex flex-col justify-between overflow-hidden border-border bg-card transition-all hover:shadow-md dark:border-zinc-800 cursor-pointer"
            onClick={() => setIsTapped(!isTapped)}
        >
            <CardContent className="p-6">
                <div className={cn(
                    "flex flex-col transition-transform duration-300 group-hover:-translate-y-12",
                    isTapped && "-translate-y-12"
                )}>
                    <div className="mb-4">
                        <div className={`inline-flex items-center justify-center rounded-lg p-2 ${iconBg}`}>
                            <Icon className={`h-6 w-6 ${iconColor}`} />
                        </div>
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-foreground">{title}</h3>
                    <p className="mb-3 text-xs font-medium text-muted-foreground">{category}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Hover Action */}
                <div className={cn(
                    "absolute inset-x-0 bottom-0 flex translate-y-full flex-col justify-end p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                    isTapped && "translate-y-0 opacity-100"
                )}>
                    {comingSoon ? (
                        <Button
                            disabled
                            className="w-full cursor-not-allowed bg-foreground text-background opacity-50 hover:bg-foreground/90"
                        >
                            Coming Soon...
                        </Button>
                    ) : (
                        <Button
                            asChild
                            className="w-full cursor-pointer bg-foreground text-background hover:bg-foreground/90"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Link href={href} target="_blank">
                                Visit Website
                            </Link>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
