"use client"
import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"

const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center ">
        <span className="orange_gradient font-bold">VirtualMed Imaging</span>

        </Link>
        <div className="flex gap-2 orange_gradient">
        <Link href='/home' className=" font-bold ">Home</Link>
        <Link href='/home' className=" font-bold ">LogOut</Link>
        </div>
  
        

    </nav>
  )
}

export default Navbar