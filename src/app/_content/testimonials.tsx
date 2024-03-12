"use client";
import { Card, CardContent } from "@components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { StarIcon } from "lucide-react";
import { Testimonial } from "types";

export default function Testimonials({
	testimonials,
}: {
	testimonials: Testimonial[];
}) {
	return (
		<section className="flex justify-center" id="testimonials">
			<div className="py-20 px-8 max-w-7xl w-full">
				<h1 className="uppercase font-bold mb-8">
					Our <span className="text-primary">Google Reviews</span> Say
				</h1>
				<div className="flex justify-center">
					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						plugins={[
							Autoplay({
								delay: 3000,
							}),
						]}
						className="max-w-7xl w-full"
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className="xl:basis-1/2 2xl:basis-1/3"
								>
									<Card>
										<CardContent className="flex flex-col h-[200px] py-2">
											<p className="text-ellipses max-h-[100px] overflow-hidden">
												{testimonial.testimonial}
											</p>
											<h3 className="mt-auto">
												{testimonial.name}
											</h3>
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
											<p className="text-foreground/50">
												{testimonial.date}
											</p>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
