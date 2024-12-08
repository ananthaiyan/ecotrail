"use client";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"

import { UserButton } from "@clerk/nextjs";
import { JSX, SVGProps } from "react";

export function Settings() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
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
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2 px-5 py-5">
       <UserButton />
        </div>
      </header>
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Carbon Footprint Dashboard</h1>
        <p className="text-muted-foreground">
          Configure your carbon footprint monitoring dashboard to track your progress and get notified of changes.
        </p>
      </div>
      <div className="grid gap-8 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard Settings</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="target">Target Carbon Footprint</Label>
                <Input id="target" type="number" placeholder="Enter target in tons" />
                <p className="text-sm text-muted-foreground">Set your target carbon footprint goal.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="frequency">Reporting Frequency</Label>
                <Select id="frequency">
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="annually">Annually</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">Choose how often you want to receive reports.</p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notifications">Notification Preferences</Label>
              <div className="flex items-center space-x-2">
                <Checkbox id="email" defaultChecked />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="push" />
                <Label htmlFor="push">Push Notifications</Label>
              </div>
              <p className="text-sm text-muted-foreground">
                Select how you want to receive notifications about your carbon footprint.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save Settings</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Past Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Q4 2023 Report</p>
                  <p className="text-sm text-muted-foreground">Generated on December 31, 2023</p>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-primary" prefetch={false}>
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Q3 2023 Report</p>
                  <p className="text-sm text-muted-foreground">Generated on September 30, 2023</p>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-primary" prefetch={false}>
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Q2 2023 Report</p>
                  <p className="text-sm text-muted-foreground">Generated on June 30, 2023</p>
                </div>
                <Link href="#" className="inline-flex items-center gap-2 text-primary" prefetch={false}>
                  <DownloadIcon className="h-4 w-4" />
                  Download
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}
