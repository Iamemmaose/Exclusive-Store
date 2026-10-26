"use client"

import Link from "next/link";
import Button from "./button"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



export default function Header() {

    const menuBar = [
        { id: 1, label: "Home", href: "/" },
        { id: 2, label: "Shop", href: "/shop" },
        { id: 3, label: "About", href: "/about" },
        { id: 4, label: "Contact", href: "/contact" },
        { id: 5, label: "Sign Up", href: "/signup" },
    ]
    const [showMenu, SetShowMenu] = useState<boolean>(false)

    function handleShowMenu() {
        SetShowMenu(showMenu => !showMenu)
    }

    return (
        <header className="fixed flex flex-col border border-gray-100 border-b-gray-300 w-full">
            <div className="relative flex justify-center items-center px-2 py-2 bg-black text-white capitalize bg-black">
                <p className="text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span><Button variant="link" href="/shop" className="text-white underline after:bottom-2">ShopNow</Button></span></p>
            </div>

            {showMenu &&
                <div className={`absolute top-17 min-[605px]:top-13 left-0 z-50 max-w-[85vw] w-0 min-h-screen bg-white text-black backdrop-blur p-5 shadow-xl transition-[width] duration-300 ease-in-out min-[1022px]:hidden ${showMenu && "w-70"}`} aria-hidden={!showMenu} inert={!showMenu} aria-label="mobile menu navigation">
                    <div className="flex justify-between items-center mb-4">
                        <Link href="/" aria-label="Exclusive Home">
                            <span className="text-2xl font-bold">Exclusive</span>
                        </Link>
                        <div className=" absolute right-10" onClick={handleShowMenu} aria-label="close menu icon">
                            <IoMdClose size={24} />
                        </div>
                    </div>
                    <nav aria-label="main navigation">
                        <ul>
                            {menuBar.map((menu) => (
                                <li key={menu.id}><Button variant="link" href={menu.href} className="font-thin text-lg" onClick={handleShowMenu} >{menu.label}</Button></li>
                            ))}
                        </ul>
                    </nav>
                </div>}

            <div className="flex justify-between items-center px-10 py-5 bg-white text-black">
                <div className="relative flex justify-between items-center gap-5 xl:gap-30 shrink-0">
                    <div onClick={handleShowMenu} className="flex min-[1022px]:hidden" aria-label="menu icon">
                        {!showMenu && <CiMenuBurger size={24} />}
                    </div>
                    <Link href="/" aria-label="Exclusive Home">
                        <span className="text-2xl font-bold">Exclusive</span>
                    </Link>
                    <nav aria-label="main navigation" className="hidden min-[1022px]:flex">
                        <ul className="flex gap-5">
                            {menuBar.map((menu) => (
                                <li key={menu.id}><Button variant="link" href={menu.href} >{menu.label}</Button></li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-between items-center md:gap-10 lg:gap-10">
                    <div className="max-[768px]:hidden" >
                        <form action="/search" method="GET" role="search" className="flex justify-center items-center bg-[#F5F5F5] p-2 rounded-lg w-80  min-[1022px]:w-full">
                            <label htmlFor="search" className="sr-only">Search Products</label>
                            <input type="text" name="q" id="search" placeholder="What are you looking for?" className="w-full outline-none border-none p-2" />
                            <button type="submit" aria-label="search products" ><CiSearch aria-hidden="true" size={20} /></button>
                        </form>
                    </div>

                    <nav aria-label="shopping, wishlist and account" className="flex justify-between items-center gap-6 lg:gap-4">
                        <Link href="/wishlist" aria-label="wishlist" ><CiHeart aria-hidden="true" size={24} /></Link>
                        <Link href="/cart" aria-label="shopping cart"><CiShoppingCart aria-hidden="true" size={24} /></Link>
                        <Link href="/user" aria-label="my account"><CiUser aria-hidden="true" size={24} /></Link>
                    </nav>
                </div>
            </div>
            <div className="px-7 min-[769px]:hidden mb-5" >
                <form action="/search" method="GET" role="search" className="flex justify-center items-center bg-[#F5F5F5] p-2 rounded-lg w-full">
                    <label htmlFor="search" className="sr-only">Search Products</label>
                    <input type="text" name="q" id="search" placeholder="What are you looking for?" className="w-full outline-none border-none p-2" />
                    <button type="submit" aria-label="search products" ><CiSearch aria-hidden="true" size={20} /></button>
                </form>
            </div>
        </header >
    )
}