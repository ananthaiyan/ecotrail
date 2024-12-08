// components/Header.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoaded } = useUser(); // Use the `user` object and `isLoaded` flag

  const isAuth = isLoaded && !!user; // Check if user is loaded and exists

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 mt-4 mx-auto w-[90%] max-w-6xl px-6 h-14 flex items-center backdrop-blur supports-[backdrop-filter]:bg-background/20 rounded-lg shadow-lg z-50">
        <Link className="flex items-center justify-center" href="#">
          <img src="/logo.png" alt="EcoTrail Logo" className="h-12 w-30" />
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Button className="hidden sm:flex relative" variant="ghost" asChild>
  <Link href="#features" className="hover:text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
    Features
  </Link>
</Button>
<Button className="hidden sm:flex relative" variant="ghost" asChild>
  <Link href="#pricing" className="hover:text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
    Pricing
  </Link>
</Button>
<Button className="hidden sm:flex relative" variant="ghost" asChild>
  <Link href="#about" className="hover:text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
    About
  </Link>
</Button>
<Button className="hidden sm:flex relative" variant="ghost" asChild>
  <Link href="#contact" className="hover:text-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-500 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
    Contact
  </Link>
</Button>

        
          {isAuth ? (
            <Link className="text-sm font-medium hover:underline" href="/dashboard">
              <Button variant="custom"
                >Dashboard</Button>
            </Link>
          ) : (
            <Link href='/sign-in'>
              <Button variant="custom">Login</Button>
            </Link>
          )}
          <Button
            className="sm:hidden"
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>
      </header>
      <div className="fixed top-7 right-7 w-12 h-12 z-50">
      <UserButton afterSignOutUrl="/" 
      />
    </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <nav className="flex flex-col items-center gap-4 p-4 bg-background">
            <Link href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            {isAuth && (
              <Link className="text-sm font-medium hover:underline" href="/dashboard">
                Dashboard
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
