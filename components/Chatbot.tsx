"use client";

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import React from 'react';
import { IconHome, IconSettings, IconReport, IconUser, IconMessage, IconDashboard } from '@tabler/icons-react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'; // Adjust import path as needed
import TypingEffect from "./component/TypingEffect";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

const predefinedPrompts = [
  "What causes carbon emissions in coal mining?",
  "How can we reduce a coal mine's carbon footprint?",
  "What are new tech for monitoring coal mine emissions?"
];

export function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState<string>("");
  const [showPrompts, setShowPrompts] = useState<boolean>(true);
  const { user } = useUser(); // Use Clerk hook to get user info
  const chatContainerRef = useRef<HTMLDivElement | null>(null); // Ref for chat container

  async function runChat(prompt: string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "HELLO" }],
        },
        {
          role: "model",
          parts: [{ text: "Hello there! How can I assist you today?" }],
        },
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response.text();

    setMessages(prevMessages => [
      ...prevMessages,
      { role: "user", content: prompt },
      { role: "model", content: response }
    ]);
    setInput(""); // Clear input after sending
    setShowPrompts(false); // Hide prompts after selection
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() !== "") {
      await runChat(input);
    }
  };

  const clearChat = () => {
    setMessages([]); // Clear the chat messages
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      // Ensure the scroll happens after the DOM update
      const timeout = setTimeout(() => {
        chatContainerRef.current!.scrollTop = chatContainerRef.current!.scrollHeight;
      }, 100); // Adjust delay if needed

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  const links = [
    { label: user?.firstName || 'Profile', href: '/dashboard', icon: <UserButton /> },
    { label: 'Dashboard', href: '/dashboard', icon: <IconDashboard /> },
    { label: 'Home', href: '/', icon: <IconHome /> },
    { label: 'Reports', href: '/reports', icon: <IconReport /> },
    { label: 'Settings', href: '/settings', icon: <IconSettings /> },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarBody className="dark:bg-neutral-800">
          {links.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300 bg-white shadow-md">
          <div className="flex items-center">
            <Link className="flex items-center justify-center" href="/">
              <img src="/logo.png" alt="EcoTrail Logo" className="h-12 w-30" />
            </Link>
          </div>
          <Link className="text-sm font-medium hover:underline" href="/dashboard">
            <Button variant="custom">Dashboard</Button>
          </Link>
        </header>

        <main className="flex-1 px-4 py-6 flex flex-col">
          <div className="grid place-items-center mb-4">
            <img src="/ecobotlogo.png" alt="EcoTrail Logo" className="h-24 w-50" />
            <p className="mt-2 text-xl text-gray-600">How can I assist you today?</p>
          </div>

          {showPrompts && (
            <div className="flex justify-center mb-4 space-x-4">
              {predefinedPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  onClick={() => runChat(prompt)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700"
                >
                  {prompt}
                </Button>
              ))}
            </div>
          )}

          <div className="flex-grow max-h-xl max-w-3xl mx-auto rounded-lg overflow-hidden">
            <div ref={chatContainerRef} className="flex-grow p-4 bg-white-50 overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.role === "user" ? "text-blue-600" : "text-gray-800"}`}>
                  {msg.role === "model" ? (
                    <TypingEffect text={msg.content} speed={5} /> // Adjust speed as needed
                  ) : (
                    <p className="whitespace-pre-line">{msg.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>

        <form className="fixed bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-white border-t border-gray-300 shadow-md" onSubmit={onSubmit}>
          <div className="flex flex-1 max-w-3xl">
            <Input 
              placeholder="Type your message here..."
              name="prompt"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-4 py-2 text-base hover:border-[#fff] transition"
            />
            <Button className="ml-2 bg-blue-500 text-white hover:bg-blue-600" type="submit">
              Send
            </Button>
            <Button className="ml-2 bg-red-500 text-white hover:bg-red-600" type="button" onClick={clearChat}>
              Clear Chat
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
