import { SignUpButton } from "@components/signup-dialog";
import { ChevronRightIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<section className="flex flex-col items-center justify-center bg-primary py-8 font-bold text-center">
				<h1>Upgrade ☝️ your skills today!</h1>
				<h3>⚒️ Build up your boxing knowledge.</h3>
				<SignUpButton
					button="Free Intro Visit"
					// @ts-ignore
					variant="outline"
					className="mt-4"
				/>
			</section>
			<footer className="flex justify-center w-full pt-8">
				<div className="flex flex-col md:flex-row py-2 px-4 max-w-7xl">
					<div className="flex-2">
						<div className="flex items-center">
							<Image
								src="/logo.png"
								alt="logo"
								width={80}
								height={80}
							/>
							<h2 className="font-bold ml-4 text-center w-full md:w-fit">
								Nemea{" "}
								<span className="text-primary">Boxing</span>
							</h2>
						</div>
						<Image
							src="/boxer.png"
							alt="Floyd MayWeather punching"
							className="boxer hidden md:block "
							width={500}
							height={500}
						/>
					</div>
					<div className="flex-1 flex-col justify-between mt-8 md:mt-0">
						<div className="flex mb-8">
							<div className="flex flex-col justify-between pr-12 font-bold">
								<Link href="/#testimonials">Testimonials</Link>
								<Link href="/about">About Us</Link>
								<Link href="/#programs">Programs</Link>
								<SignUpButton
									button="Pricing"
									title="Where do you want us to send our membership pricing information?"
									// @ts-ignore
									variant="link"
									className="text-foreground hover:no-underline w-fit p-0"
								/>
							</div>
							<div className="h-[225px] w-[4px] bg-primary mx-4" />
							<div className="flex flex-col gap-4">
								<div>
									<h2 className="uppercase font-bold">
										Call Us 📞
									</h2>

									<Link href="tel:1-702-720-4948">
										+1 702-720-4948
									</Link>
								</div>
								<SignUpButton
									button={
										<>
											Free Intro Visit{" "}
											<ChevronRightIcon
												size={16}
												className="group-hover:translate-x-1 transition"
											/>
										</>
									}
								/>
							</div>
						</div>
						<div className="flex items-center mt-auto">
							<p className="text-xs text-foreground/50 mr-auto">
								Copyright ©️ {new Date().getFullYear()} Nemea
								Boxing LLC
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
							</div>
						</div>
					</div>
				</div>
			</footer>
			<style>
				{`
					.boxer {
						-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 25%);
						mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 25%);
					}
				`}
			</style>
		</>
	);
}
