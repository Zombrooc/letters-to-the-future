"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import logo from "../app/logo.svg";
import {
  Bookmark,
  CoinsIcon,
  Home,
  LayoutGrid,
  LogOut,
  Menu,
  Settings,
  SquarePen,
  Tag,
  Users,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

export default function Navbar() {
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Letters to the future</span>
            <Image
              alt="Letter to the future logo"
              src={logo}
              className="h-8 w-auto"
              width={501}
              height={372}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          {/* <button type="button" onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button> */}
          <Sheet>
            <SheetTrigger className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <Menu aria-hidden="true" className="h-6 w-6" />
              <span className="sr-only">Open main menu</span>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex lg:flex-1 lg:items-center">
                    <Link href="/" className="-m-1.5 p-1.5">
                      <span className="sr-only">Letters to the future</span>
                      <Image
                        alt="Letter to the future logo"
                        src={logo}
                        className="h-8 w-auto"
                        width={501}
                        height={372}
                      />
                    </Link>
                    <span className="ml-2 text-wrap text-left leading-4">
                      LETTER TO FUTURE
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <ScrollArea className="border-border h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start">
                {/* <nav className="mt-8 h-full w-full">
                    <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                      <li className="w-full grow flex items-end">
                        <TooltipProvider disableHoverableContent>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                              <Button
                                onClick={() => {}}
                                variant="outline"
                                className="w-full justify-center h-10 mt-5"
                              >
                                <span className={"mr-4"}>
                                  <LogOut size={18} />
                                </span>
                                <p
                                  className={cn(
                                    "whitespace-nowrap",
                                    "opacity-100"
                                  )}
                                >
                                  Sign out
                                </p>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                              Sign out
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    </ul>
                  </nav> */}
                <div className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 mb-1"
                    asChild
                  >
                    <Link href="/">
                      <span className="mr-4">
                        <Home size={18} />
                      </span>
                      <p className="max-w-[200px] truncate">Home</p>
                    </Link>
                  </Button>
                </div>
                <div className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-10 mb-1"
                    asChild
                  >
                    <Link href="/princing">
                      <span className="mr-4">
                        <CoinsIcon size={18} />
                      </span>
                      <p className="max-w-[200px] truncate">Pricing</p>
                    </Link>
                  </Button>
                </div>
              </ScrollArea>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-end">
                <Link
                  href="/auth/signin"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <NavigationMenu className="hidden lg:flex lg:gap-x-12">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/auth/signin"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
