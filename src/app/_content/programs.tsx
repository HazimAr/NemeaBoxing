import { SignUpButton } from "@components/signup-dialog";
import { cn } from "@lib/utils";
import Image from "next/image";

const programs: { title: string; description: string }[] = [
	{
		title: "Adult Boxing (Ages 18+)",
		description:
			"Our Las Vegas gym offers boxing classes to get fit, boxing classes for those who want to improve their boxing skills and boxing classes for the individuals who want to compete at a competitive level.",
	},
	{
		title: "Teen Boxing (Ages 13-17)",
		description:
			"Our youth boxing program is designed to inspire and empower young athletes, offering an engaging and safe environment for pre-teens and teens to learn the art of boxing in Las Vegas. Focused on developing physical fitness, mental discipline, and self-confidence, this program is perfect for youths of all skill levels.",
	},
	{
		title: "Kids Boxing (Ages 6-12)",
		description:
			"Our kids boxing program is tailored for young enthusiasts eager to learn the art of boxing. This program focuses on developing fundamental boxing skills, promoting physical fitness, and instilling discipline and confidence in a fun and safe environment.",
	},

	{
		title: "6 Week Challenge",
		description:
			"Want to launch your health and fitness journey? Challenge yourself for 6 weeks with us! Let our Las Vegas gym help fostering motivation, encouragement, and community to achieve your fitness goals.",
	},
	{
		title: "Open Gym",
		description:
			"Come use our Las Vegas gym, work out, and spar at your own pace. Whether you're perfecting your form, working on specific skills, or just looking to sweat it out, our Open Gym offers the freedom and flexibility you need to incorporate boxing into your lifestyle.",
	},
];

export default function Programs() {
	return (
		<section className="flex justify-center">
			<div className="py-20 px-4 max-w-7xl w-full" id="programs">
				<h1 className="font-bold uppercase mb-8">
					What We <span className="text-primary">Offer!</span>
				</h1>
				<div className="flex flex-col">
					{programs.map((program, i) => (
						<ProgramCard
							key={program.title}
							title={program.title}
							description={program.description}
							image={`/${program.title.split(" ")[0].toLowerCase()}-${program.title.split(" ")[1].toLowerCase()}.jpg`}
							odd={i % 2 != 0}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function ProgramCard({
	title,
	description,
	image,
	odd,
}: {
	title: string;
	description: string;
	image: string;
	odd: boolean;
}) {
	return (
		<div
			className={cn(
				"flex items-center",
				odd ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"
			)}
		>
			<div className="flex-1 flex justify-center">
				<Image
					src={image}
					alt={title}
					width={350}
					height={350}
					className="rounded-xl"
				/>
			</div>
			<div className="flex-1 flex flex-col items-center">
				<h2 className="uppercase font-bold">{title}</h2>
				<p className="mb-4">{description}</p>
				<SignUpButton button="Sign Up" />
			</div>
		</div>
	);
}
