import { SignUpButton } from "@components/signup-dialog";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="h-[800px] md:h-screen flex flex-col justify-center">
			<div className="px-12">
				<div className="uppercase font-black md:tracking-[-0.225em] md:leading-[8em]">
					<h1 className="sm:text-[6em] md:text-[8em] lg:text-[10em] text-center md:text-left">
						Learn To
						<br />
						Fight Like
						<br />
						<span className="text-primary">Champions</span>
					</h1>
				</div>
				<SignUpButton
					className="h-fit mt-8 w-full md:w-fit md:text-[2em] group"
					button={
						<>
							Free Intro Visit{" "}
							<ChevronRightIcon
								size={32}
								className="group-hover:translate-x-1 transition"
							/>
						</>
					}
				/>
			</div>
			<h1 className="hidden md:block uppercase font-black text-[30em] max-w-[98vw] overflow-hidden whitespace-nowrap text-clip absolute bottom-0 text-foreground/20 z-[-5]">
				champion
			</h1>
			<Image
				src="/boxer.png"
				alt="Floyd MayWeather punching"
				className="boxer absolute right-[5%] scale-x-[-1] z-[-1] opacity-25 md:opacity-100"
				width={1000}
				height={1024}
				quality={90}
			/>

			{/* <h1 className="uppercase text-current/50">champion</h1> */}
		</section>
	);
}
