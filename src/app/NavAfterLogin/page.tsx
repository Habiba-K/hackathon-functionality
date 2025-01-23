import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavAfterLogin = () => {
  return (
    <nav className="w-full h-[20px] p-4 ">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
        <div className="hidden lg:flex gap-4 text-sm font-bold text-[#737373]">
          <Link href={"http://localhost:3000/"} className="text-sm font-bold">
            Home
          </Link>
          <Link href={"/Shop"} className="text-sm font-bold">
            Product
          </Link>
          <Link href={"/Pricing"} className="text-sm font-bold">
            Pricing
          </Link>
          <Link href={"/Contact"} className="text-sm font-bold">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex gap-3 text-sm">
          <Button
            variant={"outline"}
            className="rounded text-[#23A6F0] bg-white mr-10 font-bold"
          >
            Login
          </Button>
          <Button
            variant={"outline"}
            className="rounded bg-[#23A6F0] text-white mr-10 font-bold"
          >
            Become a member
            <ArrowRight />
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
              </SheetTitle>
              <SheetDescription className="text-center">
                <div className="flex flex-col gap-6 mt-6 text-[#737373] text-sm">
                  <Link
                    href={"http://localhost:3000/"}
                    className="text-sm font-bold"
                  >
                    Home
                  </Link>
                  <Link href={"/Shop"} className="text-sm font-bold">
                    Product
                  </Link>
                  <Link href={"/Pricing"} className="text-sm font-bold">
                    Pricing
                  </Link>
                  <Link href={"/Contact"} className="text-sm font-bold">
                    Contact
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:space-x-2 gap-2">
                  <Button
                    variant={"outline"}
                    className="rounded text-[#23A6F0] bg-white md:mr-10  font-bold"
                  >
                    Login
                  </Button>

                  <Button
                    color={"blue"}
                    className="rounded bg-[#23A6F0] text-white md:mr-10 font-bold"
                  >
                    Become a member
                    <ArrowRight />
                  </Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavAfterLogin;
