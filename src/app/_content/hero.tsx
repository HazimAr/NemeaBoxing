import { Button } from "@components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="h-screen flex flex-col justify-center">
			<div className="px-12">
				<div className="uppercase font-black tracking-[-0.225em] leading-[8em]">
					<h1 className="sm:text-[6em] md:text-[8em] lg:text-[10em]">
						Learn Boxing
						<br />
						Fight Like
						<br />
						<span className="text-primary">Champions</span>
					</h1>
				</div>

				<div className="flex flex-col gap-2 mt-8 w-fit">
					<Button className="w-fit h-fit">
						Free Intro Visit <ChevronRightIcon />
					</Button>
					<p className="text-xs text-foreground/50">
						Starting at $19.99/month
					</p>
				</div>
			</div>
			<h1 className="uppercase font-black text-[30em] max-w-[98vw] overflow-hidden whitespace-nowrap text-clip absolute bottom-0 text-foreground/20 z-[-5]">
				champion
			</h1>
			<Image
				src="/boxer.png"
				alt="Floyd Mayweather punching"
				className="boxer absolute right-[5%] scale-x-[-1] z-[-1]"
				width={1000}
				height={1024}
			/>

			{/* <h1 className="uppercase text-current/50">champion</h1> */}
		</section>
	);
}
