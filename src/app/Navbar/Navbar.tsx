"use client"
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Heart, MenuIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdPersonOutline } from "react-icons/md";
import { ClerkProvider, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  const [cart,setCart] = useState({});
  const [subtotal, setsubtotal] = useState(0);

  return (
    <nav className="w-full h-[20px] p-4 ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold text-[#252B42]">Bandage</h1>
        <div className="hidden lg:flex gap-4 text-sm font-bold text-[#737373]">
          <Link href={"http://localhost:3000/"} className="text-sm font-bold">
            Home
          </Link>
          <Link  href={"/Shop"} className="text-sm font-bold">
            <select>
              <option  value="">Shop</option>
            </select>
          </Link>
          <Link href={"/About"} className="text-sm font-bold">
            About
          </Link>
          <Link href={"/blog"} className="text-sm font-bold">
            Blog
          </Link>
          <Link href={"/Contact"} className="text-sm font-bold">
            Contact
          </Link>
          <Link href={"/MoreTeam"} className="text-sm font-bold">
            Pages
          </Link>
        </div>

        <div className="hidden md:flex gap-3 text-[#23A6F0]  text-sm items-center">
          <MdPersonOutline  />
          <a href="/login"  className="rounded-full  font-bold">
            
            Login 
          </a>
          <a href="/signup"  className="rounded-full mr-10 font-bold">
            
            / Register
          </a>
          {/* <ClerkProvider> */}
        
          {/* </ClerkProvider> */}

          <Button color={"blue"} variant={"outline"} size={"icon"} className="rounded-full ">
            <FiSearch />
          </Button>
          <Button color={"blue"} variant={"outline"} size={"icon"} className="rounded-full ">
            <Heart />
          </Button>

          <Button size={"icon"} color={"blue"} variant={"outline"}className="rounded-full">
            <ShoppingCart  />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger className="flex lg:hidden ">
          <MenuIcon className="w-5 h-5" />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="flex items-center text-[#252B42]">
                Bandage
                <div className="relative ml-10"></div>
                <div className="space-x-2">
                  <Button size={"icon"}  className="  rounded-full ">
                    <FiSearch />
                  </Button>

                  <Button size={"icon"} className="rounded-full">
                    <ShoppingCart />
                  </Button>
                </div>
              </SheetTitle>
              <SheetDescription className="text-center">
                <div className="flex flex-col gap-6 mt-6 text-[#737373] text-sm">
                  <Link href={"http://localhost:3000/"} className="text-sm font-bold">
                    Home
                  </Link>
                  <Link href={"/Shop"} className="text-sm font-bold">
                    Shop
                  </Link>
                  <Link href={"/About"} className="text-sm font-bold">
                    About
                  </Link>
                  <Link href={"/ProductDetails"} className="text-sm font-bold">
                    Product
                  </Link>
                  <Link href={"/Contact"} className="text-sm font-bold">
                    Contact
                  </Link>
                  <Link href={"/MoreTeam"} className="text-sm font-bold">
                    Pages
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
