import { ModeToggle } from "@components/toggle-mode";
import { Button } from "@components/ui/button";
import { ChevronRightIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex justify-center w-full">
			<div className="flex py-2 px-4 max-w-7xl">
				<div className="flex-1">
					<div className="flex items-center">
						<Image
							src="/logo.png"
							alt="logo"
							width={80}
							height={80}
						/>
						<h3 className="font-bold ml-4">
							Nemea <span className="text-primary">Boxing</span>
						</h3>
					</div>
					<Image
						src="/boxer.png"
						alt="Floyd Mayweather punching"
						className="boxer"
						width={500}
						height={500}
					/>
				</div>
				<div className="flex-1 flex-col justify-between">
					<div className="flex">
						<div className="flex flex-col justify-between">
							{[
								"Programs",
								"Membership",
								"Testimonials",
								"Pricing",
								"Contact",
								"FAQ",
								"Store",
							].map((link) => (
								<Link
									href={`/${link.toLowerCase()}`}
									key={link}
								>
									{link}
								</Link>
							))}
						</div>
						<div className="h-[225px] w-[2px] bg-primary mx-4" />
						<div className="flex flex-col gap-4">
							<div>
								<h2 className="uppercase font-bold">
									Gain Your Change Now!
								</h2>
								<p>
									Stay motivated and engaged with a little
									help from a supportive community of other
									members
								</p>
							</div>
							<Button className="w-fit h-fit">
								Free Intro Visit <ChevronRightIcon />
							</Button>
						</div>
					</div>
					<div className="flex items-center mt-auto">
						<p className="text-xs text-foreground/50 mr-auto">
							Copyright ©️ {new Date().getFullYear()} Nemea Boxing
							LLC
							<br />
							All rights reserved.
						</p>
						<div className="flex gap-3 items-center">
							<Link href="https://www.instagram.com/nemeaboxinggym">
								<InstagramIcon />
							</Link>
							<Link href="https://www.facebook.com/p/Nemea-Boxing-Gym-100092228926446">
								<FacebookIcon />
							</Link>
							<ModeToggle />
						</div>
					</div>
				</div>

				<style>
					{`
					.boxer {
						-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 25%);
						mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 25%);
					}
				`}
				</style>
			</div>
		</footer>
	);
}
