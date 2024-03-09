import { Button } from "@components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/ui/dialog";
import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trainers = [
	{
		name: "Benjamin Stanoff",
		image: "/benjamin-stanoff.jpg",
		instagram: "https://www.instagram.com/benstanoff/",
		bio: `Benjamin Stanoff is a rising star in the boxing world, with an impressive amateur career in Australia and a professional debut win on Showtime Boxing's world title undercard in 2021. He is now 2-0 as a professional and has already built a large and loyal fan base in Las Vegas, Sydney, and across the United States and Australia.

As the owner of Nemea Boxing Gym, a brand new facility in Las Vegas, Ben is dedicated to promoting the sport of boxing and inspiring the next generation of fighters.

With his unwavering commitment to excellence both in and out of the ring, Ben is a dedicated athlete who strives to achieve greatness. He is passionate about his sport and seeks to represent it with pride and professionalism.`,
	},
	{
		name: "Jose Lara",
		image: "/jose-lara.jpg",
		instagram: "https://www.instagram.com/jlara_28/",
		bio: `Qualifications: 6 years of boxing experience

- Group class instructor
- Trained Max Crosby and Norman Powell (both elite athletes in NFL and NBA)

What I offer: Fitness boxing

- One on One Boxing
- Group Sessions
- Strength and Conditioning`,
	},
	{
		name: "Bryan Jauregui",
		image: "/bryan-jauregui.jpg",
		instagram: "https://www.instagram.com/bryanjauregui1/",
		bio: `Bryan Has Three Years Of Boxing Experience & Has Been A Boxing & Fitness Trainer For 1 Year. Currently Building His Amateur Boxing Career.

He Has Personally Trained NFL Star Nate Hobbes & NBA Star Norman Powell! He Currently Coaches The 4:30 Kids Boxing Class At Nemea !

Bryan Offers: Personal One-On-One Boxing And Fitness Training Sessions For Individuals Of All Ages.`,
	},
	{
		name: "Mike Contreras",
		image: "/mike-contreras.jpg",
		instagram: "https://www.instagram.com/theboxingmechanic/",
		bio: "Bio coming soon!",
	},
];

export default function Trainers() {
	return (
		<section className="flex justify-center bg-secondary">
			<div className="py-20 px-8 max-w-7xl w-full">
				<h1 className="uppercase font-bold mb-8">
					Meet Your <span className="text-primary">Trainers</span>
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
					{trainers.map((trainer) => (
						<div className="flex-col w-full" key={trainer.name}>
							<Dialog>
								<DialogTrigger asChild>
									<div className="cursor-pointer">
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
										<p className="text-foreground/50">
											Trainer
										</p>
									</div>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>
											{trainer.name}
										</DialogTitle>
										<DialogDescription className="whitespace-pre-wrap">
											{trainer.bio}
										</DialogDescription>
									</DialogHeader>
									{/* <div className="grid gap-4 py-4"></div> */}
									<DialogFooter>
										<DialogClose asChild>
											<Button>Close</Button>
										</DialogClose>
									</DialogFooter>
								</DialogContent>
							</Dialog>

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
