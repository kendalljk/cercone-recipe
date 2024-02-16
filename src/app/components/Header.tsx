"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Recipes", href: "/recipes" },
    { name: "Recommendations", href: "/recommendations" },
    { name: "Add Recipe", href: "/add" },
];

export default function Header() {
  const pathname = usePathname();

const filteredNavLinks = navLinks.filter((link) => link.href !== "/" || pathname !== "/");

    return (
        <div className="fixed top-0 left-0 right-0 bg-white flex justify-center py-5 z-10">
            {filteredNavLinks.map((link) => {
                const isActive = pathname === (link.href);
                return (
                    <div key={link.name}>
                        <Link
                            href={link.href}
                            className={isActive ? "font-bold" : "px-2"}
                        >
                            {link.name}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
