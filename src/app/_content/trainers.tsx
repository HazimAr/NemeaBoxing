import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trainers = [
	{
		name: "Benjamin Stanoff",
		image: "/benjamin-stanoff.jpg",
		instagram: "https://www.instagram.com/benstanoff/",
	},
	{
		name: "Jose Lara",
		image: "/jose-lara.jpg",
	},
	{
		name: "Bryan Jauregui",
		image: "/bryan-jauregui.jpg",
	},
	{
		name: "Mike Contreras",
		image: "/mike-contreras.jpg",
	},
];

export default function Trainers() {
	return (
		<section className="flex justify-center">
			<div className="py-20 px-4 max-w-7xl w-full">
				<h1 className="uppercase font-bold">
					Meet Your <span className="text-primary">Trainers</span>
				</h1>
				<div className="flex gap-16">
					{trainers.map((trainer) => (
						<div className="flex-col w-full" key={trainer.name}>
							<div className="w-full h-[150px] relative">
								<Image
									src={trainer.image}
									alt={trainer.name}
									fill
									className="rounded-lg object-cover object-top"
								/>
							</div>
							<h3 className="uppercase font-bold">
								{trainer.name}
							</h3>
							<p className="text-foreground/50">Trainer</p>
							<div className="flex">
								{trainer.instagram && (
									<Link
										href={trainer.instagram}
										target="_blank"
										className="flex justify-between w-full"
									>
										<p>
											@
											{
												trainer.instagram
													.split("instagram.com/")[1]
													.split("/")[0]
											}
										</p>
										<InstagramIcon />
									</Link>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}