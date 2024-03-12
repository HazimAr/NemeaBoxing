import { SignUpButton } from "@components/signup-dialog";
import { cn } from "@lib/utils";
import Image from "next/image";

const programs: { title: string; description: string }[] = [
	{
		title: "Adult Boxing (Ages 18+)",
		description:
			"Join our Las Vegas gym for Adult Boxing (Ages 18+). Whether you're aiming to get fit, improve your boxing skills, or compete at a competitive level, we have classes tailored to your goals. Get started today!",
	},
	{
		title: "Teen Boxing (Ages 13-17)",
		description:
			"Join our youth boxing program in Las Vegas! Designed for pre-teens and teens, it offers a safe and engaging environment to learn the art of boxing. Perfect for all skill levels, our program focuses on physical fitness, mental discipline, and self-confidence. Unlock your potential today!",
	},
	{
		title: "Kids Boxing (Ages 6-12)",
		description:
			"Discover the thrill of boxing in a safe and fun environment! Our program is designed to teach fundamental boxing skills while promoting physical fitness and fostering discipline and confidence. Join us and unleash your child's potential today!",
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
			<div className="py-20 px-8 max-w-7xl w-full" id="programs">
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
			<div className="flex-1 flex flex-col items-start md:items-center py-8 md:py-0">
				<h2 className="uppercase font-bold">{title}</h2>
				<p className="mb-4">{description}</p>
				<SignUpButton button="Sign Up" className="w-full md:w-fit" />
			</div>
		</div>
	);
}
