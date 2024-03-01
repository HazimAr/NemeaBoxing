import { Button } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed w-full top-0 flex justify-center py-2 px-4 bg-background/75">
			<div className="max-w-7xl w-full flex">
				<Link href="/" className="mr-auto flex items-center gap-4">
					<Image src="/logo.png" alt="logo" width={80} height={80} />
					<h2 className="font-bold">
						Nemea <span className="text-primary">Boxing</span>
					</h2>
				</Link>
				<nav className="font-bold uppercase flex gap-4 items-center">
					<Link href="/about-us">About Us</Link>
					<Link href="/programs">Programs</Link>
					<Link href="/pricing">Pricing</Link>
					<Button>Contact</Button>
				</nav>
			</div>
		</header>
	);
}
