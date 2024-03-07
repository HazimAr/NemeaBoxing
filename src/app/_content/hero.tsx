import { SignUpButton } from "@components/signup-dialog";
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
				<SignUpButton
					className="w-fit h-fit mt-8 text-[2em] group"
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
			<h1 className="uppercase font-black text-[30em] max-w-[98vw] overflow-hidden whitespace-nowrap text-clip absolute bottom-0 text-foreground/20 z-[-5]">
				champion
			</h1>
			<Image
				src="/boxer.png"
				alt="Floyd Mayweather punching"
				className="boxer absolute right-[5%] scale-x-[-1] z-[-1]"
				width={1000}
				height={1024}
				quality={90}
			/>

			{/* <h1 className="uppercase text-current/50">champion</h1> */}
		</section>
	);
}
