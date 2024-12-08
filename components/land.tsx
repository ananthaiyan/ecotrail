"use Client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";

export async function Landing2() {
  const {userId} = await auth()
  const isAuth = !!userId
  
  auth
  return (
    <div className="flex flex-col min-h-screen justify-between " style={{ backgroundImage: `url('/bbblurry.svg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-opacity-75 backdrop-filter backdrop-blur-lg">
      <Link className="flex items-center font-bold" href="/home">
        MySaarthi
        <span className="sr-only ">MySaarthi</span>
      </Link>
      <nav className="flex gap-4 sm:gap-6 ml-auto pr-4">
        <Link className="text-sm font-medium hover:underline" href="/features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline" href="/about">
          About
        </Link>
        <Link className="text-sm font-medium hover:underline" href="/contact">
          Contact
        </Link>
        {isAuth && <Link className="text-sm font-medium hover:underline" href="/dash">
          Dashboard
        </Link>}
        
      </nav>
      
      <div className="flex items-center gap-4">
      {isAuth && <UserButton afterSignOutUrl="/" /> }
      </div>
    </header>
    <main className="flex-1 flex justify-center items-center">
    <section className="py-12 md:py-24 lg:py-32 text-center">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Introducing MySaarthi
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-200">
            Your AI chatbot for instant information, streamlined processes, and improved efficiency.
          </p>
          <div className="space-x-4">
            {isAuth && 
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/chat"
            >
              
              Go to Chat
              
            </Link>
            }
            {isAuth && 
            <Link
              className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
              href="/chat"
            >
            
              Learn more
            </Link>
            }
          </div>
          <div className="w-full mt-4">
            {isAuth ? (<h1></h1>):(
              <Link href='/sign-in'>
                <Button>Login to get started
                <LogIn className="w-4 h-4 ml-2"></LogIn>
                </Button>
                
              </Link>

            )}
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 MySaarthi. All rights reserved.</p>
    <nav className="flex gap-4 sm:gap-6">
      <Link className="text-xs hover:underline" href="#">
        Terms of Service
      </Link>
      <Link className="text-xs hover:underline" href="#">
        Privacy
      </Link>
    </nav>
  </footer>
</div>
)
}

function MountainIcon(props) {
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
  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
</svg>
);
}


