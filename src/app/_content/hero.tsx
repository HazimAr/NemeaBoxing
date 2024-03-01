import { Button } from "@components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section>
			<div className="uppercase font-extrabold tracking-[-0.225em] tracking-small leading-[3.5rem]">
				<h1>Learn Boxing</h1>
				<h1>Fight Like</h1>
				<h1 className="text-primary">Champions</h1>
			</div>
			<div className="flex flex-col gap-2 mt-8 w-fit">
				<Button className="w-fit">
					Free Intro Visit <ChevronRightIcon />
				</Button>
				<p className="text-xs">Starting at $19.99/month</p>
			</div>

			<Image
				src="/boxer.png"
				alt="Floyd Mayweather punching"
				className="boxer absolute top-0 scale-x-[-1] "
				width={500}
				height={512}
			/>
			<style>
				{`.boxer {
					z-index: -1;
					mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
   				-webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
				}`}
			</style>
		</section>
	);
}
