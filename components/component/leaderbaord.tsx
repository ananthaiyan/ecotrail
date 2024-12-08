
"use client";

import { UserButton } from "@clerk/nextjs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

export function Leaderbaord() {
  const data = [
    { name: "Mine A", carbonRatio: 0.85, rank: 1 },
    { name: "Mine B", carbonRatio: 0.72, rank: 2 },
    { name: "Mine C", carbonRatio: 0.68, rank: 3 },
    { name: "Mine D", carbonRatio: 0.61, rank: 4 },
    { name: "Mine E", carbonRatio: 0.55, rank: 5 },
    { name: "Mine F", carbonRatio: 0.49, rank: 6 },
    { name: "Mine G", carbonRatio: 0.43, rank: 7 },
    { name: "Mine H", carbonRatio: 0.38, rank: 8 },
    { name: "Mine I", carbonRatio: 0.32, rank: 9 },
    { name: "Mine J", carbonRatio: 0.27, rank: 10 },
  ]
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Leaderboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="ml-auto flex items-center gap-2 px-5 py-5">
       <UserButton />
        </div>
      </header>
      <h1 className="text-3xl font-bold text-center mb-8">Coal Mine Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-2 text-left">Mine</th>
              <th className="px-4 py-2 text-right">Carbon Ratio</th>
              <th className="px-4 py-2 text-right">Rank</th>
            </tr>
          </thead>
          <tbody>
            {data.map((mine) => (
              <tr key={mine.name} className="border-b border-muted/20 hover:bg-muted/10">
                <td className="px-4 py-3 text-left">{mine.name}</td>
                <td className="px-4 py-3 text-right">{mine.carbonRatio.toFixed(2)}</td>
                <td className="px-4 py-3 text-right">{mine.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
