import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";


type VariantName = "primary" | "outline" | "link" | "red"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
    children: React.ReactNode,
    href?: string,
    variant?: VariantName,
    className?: string
}



export default function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {

    const baseClasses = "inline-block px-4 py-2 text-sm outline-none capitalize tracking-wide cursor-pointer md:text-lg "

    const variantClasses= {
        primary: "bg-(--primary) text-white rounded-sm transition-all duration-700 ease-in-out hover:bg-red-600",
        outline: "bg-none text-black rounded-sm border border-black transition-all duration-700 ease-in-out hover:border-red-500 hover:text-red-500",
        red: "text-(--primary) bg-none border-none outline-none transition-all duration-700 ease-in-out hover:text-red-600",
        link: "relative text-black no-underline px-1 py-1 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 after:bottom-1 after:h-0.5 after:bg-black after:transition-all after:duration-700 after:ease-in-out hover:after:w-full "
    }

    const classes = twMerge(baseClasses, variantClasses[variant], className)

    if (href) {
        return <Link className={classes} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</Link>
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}