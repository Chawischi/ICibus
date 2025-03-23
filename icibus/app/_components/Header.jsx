"use client"
import { SignIn, SignInButton, SignUp, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Header(){

    const{user, isSignedIn}= useUser();

    return(
        <div className="hidden md:flex justify-between items-center py-3 px-7 md:px16 shadow-md">
            <Image src= '/logo_icibus.png' alt='logo' width={150} height={150} />

            <div className="flex border p-2 rounded-lg bg-gray-200 w-96" >
                <input type="text" name="search" id="search" className=" bg-transparent w-full outline-none" />
                <Search/>
            </div>

            {isSignedIn?
                <UserButton/>
                :<div className="flex gap-5">
                    <SignInButton mode="modal">
                        <Button variant="outline">Login</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                        <Button>Sign Up</Button>
                    </SignUpButton>
                </div>
            }           

        </div>
    )    
}

export default Header