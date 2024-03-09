import Image from "next/image";
export default function Page() {
	return (
		<div className="text-center">
			<section className="bg-primary py-4">
				<h1 className="font-bold">About the Gym</h1>
				<h3>The Best Boxing Gym in Las Vegas</h3>
			</section>
			<div className="h-[540px] relative">
				<Image src="/gym.jpg" alt="nemea gym" fill objectFit="cover" />
			</div>
			<section className="flex justify-center">
				<div className="py-20 px-4 max-w-7xl w-full">
					<h1 className="font-bold">
						Nemea <span className="text-primary">Boxing</span> Gym
					</h1>
					<p>
						Nemea Boxing Gym is the leading boxing gym in Las Vegas,
						providing a friendly and inclusive atmosphere for
						individuals of all ages and skill levels. Check out our
						class schedule below to find the perfect fit for you. If
						classes aren't your preference, take advantage of our
						open gym option for a flexible workout experience. For a
						more personalized and one-on-one coaching experience,
						please contact us for availability and pricing, as our
						coaches offer various schedules and rates. We look
						forward to helping you achieve your boxing and fitness
						goals!
					</p>
				</div>
			</section>
			<section className="flex justify-center bg-secondary">
				<div className="py-20 px-4 max-w-7xl w-full">
					<h1 className="font-bold">
						About <span className="text-primary">Us</span>
					</h1>
					<div className="flex flex-col gap-4">
						<p>
							At Nemea Boxing Gym, we are dedicated to embracing
							boxing as more than just a sport - it's a way of
							life. With classes and training options for all ages
							and skill levels, from kids' boxing to advanced
							sparring, we focus on teaching proper technique and
							fostering the strength, agility, and confidence
							needed both inside and outside the ring.
						</p>
						<p>
							Established in 2023, Nemea was founded with the
							mission of providing high-quality boxing training in
							Las Vegas and fostering a strong sense of community.
							Our boxing gym is not a place of comfort but a place
							where you go to challenge yourself and conquer
							obstacles alongside like-minded individuals.
						</p>
						<p>
							The name “Nemea” draws inspiration from the
							legendary story of Hercules' journey, where he faced
							the Nemean lion in the city of Nemea. At Nemea
							Boxing Gym, we believe in stepping into the
							metaphorical “lions den” and overcoming any
							obstacles that come our way, leaving feeling like
							heroes.
						</p>
						<p>
							Whether your goal is to compete in the ring, improve
							your fitness, or learn the fundamentals of the
							sport, Nemea Boxing Gym is the ultimate destination
							for boxing in Las Vegas. Join us today and embark on
							a journey to becoming the best version of yourself!
						</p>
					</div>
				</div>
			</section>

		</div>
	);
}
