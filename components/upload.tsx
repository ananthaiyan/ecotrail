import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Sidebar, SidebarBody, SidebarLink as SidebarLinkComponent } from '@/components/ui/sidebar';
import { IconHome, IconSettings, IconReport, IconUser, IconMessage, IconList } from '@tabler/icons-react';
import { useUser, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// FileUploadModal component
interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FileUploadModal({ isOpen, onClose }: FileUploadModalProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
          &times; {/* Close button */}
        </button>
        <div className="w-full">
          <FileUpload onChange={handleFileUpload} />
        </div>
      </div>
    </div>
  );
}

const Upload: React.FC = () => {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    { label: user?.firstName ?? 'User', href: '/dashboard', icon: <UserButton /> },
    { label: 'Home', href: '/', icon: <IconHome /> },
    { label: 'Reports', href: '/reports', icon: <IconReport /> },
    { label: 'Settings', href: '/settings', icon: <IconSettings /> },
    { label: 'EcoBot', href: '/chatbot', icon: <IconMessage /> },
    { label: 'Leaderboard', href: '/leader', icon: <IconList /> },
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <Sidebar>
        <SidebarBody className="dark:bg-neutral-800">
          {links.map((link, index) => (
            <SidebarLinkComponent key={index} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      <div className="flex flex-col flex-1 min-h-screen bg-background relative">
        <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <Link href="/">
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
                <Link href="/reports">
                  <Button variant="custom" className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-green bg-[linear-gradient(110deg,#319e0d,45%,#d2fba4,55%,#319e0d)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-green-50">
                    AI Report Generator
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 py-6 px-4 md:px-6">
          <FileUploadModal isOpen={isModalOpen} onClose={closeModal} />
        </main>

        <footer className="py-6 md:px-8 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 EcoTrail. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Upload;
