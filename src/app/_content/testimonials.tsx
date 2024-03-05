import Image from "next/image";
import { Testimonial } from "types";
import { StarIcon } from "lucide-react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@components/ui/carousel";
import { Card, CardContent } from "@components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonials({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	return (
		<section className="flex justify-center">
			<div className="py-20 px-4 max-w-7xl w-full">
				<h1 className="uppercase font-bold">
					What Our <span className="text-primary">Members</span> Say
				</h1>
				<div className="flex justify-center">
					<Carousel
						opts={{
							align: "start",
						}}
						plugins={[
							Autoplay({
								delay: 2000,
							}),
						]}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className="basis-1/1 md:basis-1/2 lg:basis-1/3"
								>
									<Card className="h-[300px]">
										<CardContent>
											<p className="text-ellipses">
												{testimonial.testimonial}
											</p>
											<h2>{testimonial.name}</h2>
											<div className="flex items-center gap-1">
												{Array.from(
													{ length: 5 },
													(_, i) => (
														<StarIcon
															key={i}
															className={`w-5 h-5 ${
																i <
																testimonial.rating
																	? "text-primary"
																	: "text-gray-300"
															}`}
														/>
													)
												)}
											</div>
											<p className="test-foreground/50">
												{testimonial.date}
											</p>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
