import { Button } from "@components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 flex py-2 mx-4">
			<Link href="/" className="mr-auto">
				<Image src="/logo.png" alt="logo" width={100} height={100} />
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
