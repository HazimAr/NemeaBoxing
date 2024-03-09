"use client";
import { SignUpButton } from "@components/signup-dialog";
import { Button } from "@components/ui/button";
import { cn } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	return (
		<header
			className={cn(
				"w-full top-0 flex items-center justify-center py-2 px-4 bg-background/75 z-50",
				pathname == "/" ? "fixed" : "sticky"
			)}
		>
			<div className="max-w-7xl w-full flex">
				<Link href="/" className="mr-auto flex items-center gap-4">
					<Image src="/logo.png" alt="logo" width={80} height={80} />
					<h2 className="font-bold">
						Nemea <span className="text-primary">Boxing</span>
					</h2>
				</Link>
				<nav className="font-bold uppercase gap-4 items-center hidden md:flex">
					{/* <Link href="/about-us">About Us</Link> */}
					<Link href="/about">About Us</Link>

					<Link href="/#programs">Programs</Link>
					<SignUpButton
						button="Pricing"
						title="Where do you want us to send our membership pricing information?"
						// @ts-ignore
						variant="link"
						className="text-foreground hover:no-underline text-md w-fit p-0"
					/>
					<Button>
						<Link href="/contact">Contact</Link>
					</Button>
				</nav>
			</div>
		</header>
	);
}
