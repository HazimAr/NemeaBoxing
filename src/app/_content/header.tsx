import { Button } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed w-full top-0 flex py-2 px-4 bg-background/50">
			<Link href="/" className="mr-auto">
				<Image src="/logo.png" alt="logo" width={80} height={80} />
			</Link>
			<nav className="font-bold uppercase flex gap-4 items-center">
				<Link href="/about-us">About Us</Link>
				<Link href="/programs">Programs</Link>
				<Link href="/pricing">Pricing</Link>
				<Button>Contact</Button>
			</nav>
		</header>
	);
}
