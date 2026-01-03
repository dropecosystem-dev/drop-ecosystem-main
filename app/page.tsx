"use client";

import { ApiCard } from "@/components/api-card";
import { Input } from "@/components/ui/input";
import {
  Search,
  NotepadText,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const apps = [
    {
      title: "Note drop",
      category: "Note",
      description: "Note drop is a platform for sharing notes with just a link.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      href: "https://note.dropeco.dev",
    },
    {
      title: "QR drop",
      category: "generator",
      description: "QR drop is a platform for generating premium qr codes for free.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      comingSoon: false,
      href: "https://qr.dropeco.dev",
    },
    {
      title: "pdf drop",
      category: "converter",
      description: "pdf drop is a platform for converting pdf files.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      comingSoon: false,
      href: "https://pdf.dropeco.dev",
    },
    {
      title: "App drop",
      category: "Apps",
      description: "App drop is a mobile application for downloading and managing open-source apps.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      comingSoon: true,
      href: "#",
    },
    {
      title: "yt drop",
      category: "downloader",
      description: "yt drop is a platform for downloading youtube videos.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      comingSoon: true,
      href: "#",
    },
    {
      title: "File drop",
      category: "sharing",
      description: "pdf drop is a platform for converting pdf files.",
      Icon: NotepadText,
      iconColor: "text-white-500",
      iconBg: "bg-white-100 dark:bg-white-900/20",
      comingSoon: true,
      href: "#",
    },
  ];

  const filteredApps = apps.filter((app) => {
    const query = searchQuery.toLowerCase();
    return (
      app.title.toLowerCase().includes(query) ||
      app.category.toLowerCase().includes(query) ||
      app.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-background px-4 py-8 font-sans transition-colors md:px-8 lg:px-16">
      <main className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            A collective list of applications from drop ecosystem.
          </h1>

          <div className="relative mx-auto mt-8 max-w-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Search applications"
              className="h-12 rounded-full border-zinc-200 bg-card pl-10 text-base shadow-sm backdrop-blur-sm transition-all focus-visible:ring-zinc-400 dark:border-zinc-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredApps.map((api, index) => (
              <ApiCard
                key={index}
                title={api.title}
                category={api.category}
                description={api.description}
                Icon={api.Icon}
                iconColor={api.iconColor}
                iconBg={api.iconBg}
                comingSoon={api.comingSoon}
                href={api.href}
              />
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center text-muted-foreground py-12">
              No applications found matching "{searchQuery}"
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
