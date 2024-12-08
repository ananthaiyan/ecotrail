"use client";
import React, { useState } from 'react';
import { BarChart, Battery, Bell, Cloud, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'; // Adjust import path as needed
import { IconHome, IconSettings, IconReport, IconUser, IconMessage, IconList, IconMap } from '@tabler/icons-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser, UserButton } from '@clerk/nextjs'; // Import Clerk
import { FileUpload } from "@/components/ui/file-upload"; // Import FileUpload component
import { ResponsiveLine } from '@nivo/line';

// Floating Modal for File Upload
export function FileUploadModal({ isOpen, onClose }) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
        >
          &times; {/* Close button */}
        </button>
        <div className="w-full">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}

const Dashboard: React.FC = () => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Sidebar links
  const links = [
    { label: user?.firstName, href: '/dashboard', icon: <UserButton /> },
    { label: 'Home', href: '/', icon: <IconHome /> },
    { label: 'Reports', href: '/reports', icon: <IconReport /> },
    { label: 'Settings', href: '/settings', icon: <IconSettings /> },
    { label: 'EcoBot', href: '/chatbot', icon: <IconMessage /> },
    { label: 'Leaderboard', href: '/leader', icon: <IconList /> },
    { label: 'Map', href: '/map', icon: <IconMap /> },
  ];

  // Toggle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar>
        <SidebarBody className="dark:bg-neutral-800">
          {links.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-h-screen bg-background">
        <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link className="flex items-center justify-center" href="/">
                <img src="/logo.png" alt="EcoTrail Logo" className="h-12 w-30" />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-6">
              <Button variant="secondary" onClick={openModal}>Import Data</Button>
                <DropdownMenu>
  <DropdownMenuTrigger><Button variant="secondary">Export Data</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Export Data as:</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>CSV File</DropdownMenuItem>
    <DropdownMenuItem>Excel File</DropdownMenuItem>
    <DropdownMenuItem>PDF</DropdownMenuItem>
    <DropdownMenuItem>Image File</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
{/* <Button variant ="custom">AI Report Generator</Button> */}
<Link href="/reports"><Button variant="custom" className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-green bg-[linear-gradient(110deg,#319e0d,45%,#d2fba4,55%,#319e0d)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-green-50">
  AI Report Generator
</Button></Link>

              </nav>
            </div>
            
          </div>
        </header>

        <main className="flex-1 py-6 px-4 md:px-6">
          {/* Grid of Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Emission</CardTitle>
                <Cloud className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,345 tons</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Methane Level</CardTitle>
                <Flame className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234 ppm</div>
                <p className="text-xs text-muted-foreground">-5.2% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Energy Efficiency</CardTitle>
                <Battery className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+2.5% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Air Quality Index</CardTitle>
                <Cloud className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Good</div>
                <p className="text-xs text-muted-foreground">AQI: 42</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Sections */}
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Emission Trends</CardTitle>
              </CardHeader>
              <CardContent>
               
                  <CardContent>
                  <LineChart className="aspect-[4/3]" />
                </CardContent>
         
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Emission Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-[120px] text-sm font-medium">Coal Extraction</div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-muted">
                        <div className="h-full bg-primary" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div className="w-[60px] text-right text-sm font-medium">45%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[120px] text-sm font-medium">Transportation</div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-muted">
                        <div className="h-full bg-primary" style={{ width: '30%' }} />
                      </div>
                    </div>
                    <div className="w-[60px] text-right text-sm font-medium">30%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-[120px] text-sm font-medium">Processing</div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-muted">
                        <div className="h-full bg-primary" style={{ width: '25%' }} />
                      </div>
                    </div>
                    <div className="w-[60px] text-right text-sm font-medium">25%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Alerts */}
          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-yellow-500" />
                    <span className="text-sm">High methane levels detected in Sector B</span>
                    <span className="ml-auto text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-green-500" />
                    <span className="text-sm">CO2 emissions back to normal levels</span>
                    <span className="ml-auto text-xs text-muted-foreground">1 day ago</span>
                  </div>
                  <div className="flex items-center">
                    <Bell className="h-4 w-4 mr-2 text-red-500" />
                    <span className="text-sm">Critical: Air quality deteriorating in residential area</span>
                    <span className="ml-auto text-xs text-muted-foreground">2 days ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <FileUploadModal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </main>

        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 EcoTrail. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#7ed957", "#319e0d"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

export default Dashboard;
