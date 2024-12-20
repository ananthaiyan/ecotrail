
"use client";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { UserButton } from "@clerk/nextjs";
import {useChat } from "ai/react";
import { JSX, SVGProps } from "react";


export function EcoBot() {
  const {messages, input, handleInputChange, handleSubmit} = useChat()
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="flex items-center justify-between px-4 py-2 border-b border-gray-300">
        <div className="flex items-center">
          <button className="p-2">
            <MenuIcon className="w-6 h-6 text-black" />
          </button>
          <span className="ml-2 text-xl font-semibold">EcoBot</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-black border-black">
            Try EcoBot Advanced
          </Button>
          <UserButton />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4">
  <div className="text-center">
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Hello, User
    </h1>
    <p className="mt-2 text-xl text-gray-600">How can I help you today?</p>
  </div>
  
  <div className="flex flex-col h-full w-full max-w-2xl mt-6"> 
    {/* Added width and max-width for better layout control */}
    
    <div className="flex-grow overflow-y-auto rounded-lg border p-4 bg-white text-black">
      {/* Added overflow-y-auto for scrolling */}
      {messages.map((m, index) => (
        <p className="whitespace-pre-line" key={index}>
          {m.content}
        </p>
      ))}
    </div>
    
    <div className="flex items-center p-2 mt-4">
      <form className="flex-1" onSubmit={handleSubmit}>
        <Input
          placeholder="Type your message here..."
          value={input}
          onChange={handleInputChange}
          className="text-black" 
          // Ensuring input text is visible
        />
      </form>
      <Button className="ml-2" type="submit">
        Send
      </Button>
    </div>
  </div>
</main>

      <footer className="px-4 py-2 text-center text-gray-500">
        <p>
          EcoBot may display inaccurate info, including about people, so double-check its responses.{" "}
          <Link href="#" className="text-blue-500" prefetch={false}>
            Your privacy and EcoBot Apps
          </Link>
        </p>
      </footer>
    </div>
  )
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function ListIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function LuggageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
