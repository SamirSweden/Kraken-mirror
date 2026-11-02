
"use client";

import { useState } from "react";
import Link from "next/link";
import {
    CreditCard,
    Rocket,
    Plane,
    Menu,
    X,
    ArrowUpRight
} from "lucide-react";

const links = [
    {
        path: "/",
        label: "Elitepay travel",
        icon: <CreditCard size={19} />
    },
    {
        path: "/about",
        label: "About us",
        icon: <Rocket size={19} />
    },
    {
        path: "/payment",
        label: "Payment",
        icon: <Plane size={19} />
    }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="relative z-50 bg-white border-b border-gray-100 px-0 py-5">

            <div className="container max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">

                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="text-3xl font-bold text-black tracking-tight"
                    >
                        Elitepay<span className="text-violet-600">.</span>
                    </Link>

                    <nav className="hidden min-[812px]:block">
                        <ul className="flex items-center gap-8">

                            {links.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        href={link.path}
                                        className="flex items-center gap-2 text-gray-500 capitalize text-sm font-semibold hover:text-violet-600 transition-colors"
                                    >
                                        {link.icon}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}

                            <li>
                                <Link
                                    href="/careers"
                                    className="bg-violet-700 hover:bg-violet-600 text-white py-2.5 px-5 rounded-full font-semibold transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>

                        </ul>
                    </nav>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="min-[812px]:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-gray-200 hover:bg-violet-100 transition-colors"
                    >
                        {isOpen ? (
                            <X size={23} className="text-violet-700" />
                        ) : (
                            <Menu size={23} className="text-gray-800" />
                        )}
                    </button>

                </div>
            </div>

            {isOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed inset-0 top-0 bg-black/30 backdrop-blur-[2px] z-40 min-[812px]:hidden"
                />
            )}

            <div
                className={`absolute top-full left-0 w-full z-50 min-[812px]:hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-3 invisible pointer-events-none"
                }`}
            >
                <div className="bg-white border-t border-gray-100 shadow-2xl rounded-b-2xl px-5 py-6">

                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">
                        Navigation
                    </p>

                    <ul className="flex flex-col gap-2">

                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    onClick={closeMenu}
                                    className="flex items-center justify-between p-4 rounded-xl text-gray-700 font-semibold hover:bg-violet-50 hover:text-violet-700 transition-all group"
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-violet-600">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="text-gray-400 group-hover:text-violet-600 transition-colors"
                                    />
                                </Link>
                            </li>
                        ))}

                    </ul>

                    <div className="mt-5 pt-5 border-t border-gray-100">
                        <Link
                            href="/careers"
                            onClick={closeMenu}
                            className="flex items-center justify-center w-full bg-violet-700 hover:bg-violet-600 text-white py-3.5 rounded-xl font-bold transition-colors"
                        >
                            Careers
                        </Link>
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-5">
                        Elitepay &mdash; Payment service © 2026
                    </p>

                </div>
            </div>

        </header>
    );
}
