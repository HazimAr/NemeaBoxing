"use server";
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
// import Autoplay from "embla-carousel-autoplay";

export default async function Testimonials() {
	const testimonials = await getReviews();

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
							// Autoplay({
							// 	delay: 2000,
							// }),
						]}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem
									key={index}
									className="basis-1/1 md:basis-1/2 lg:basis-1/3"
								>
									<Card className="h-[200px]">
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

import puppeteer from "puppeteer";

export async function getReviews() {
	const browser = await puppeteer.launch({
		args: ["--disabled-setuid-sandbox", "--no-sandbox"],
	});
	// Creating new context and page.

	const page = await browser.newPage();
	console.log("going to url");
	await page.goto(
		"https://www.google.com/search?q=nemea+boxing+las+vegas&sca_esv=c5f02fd2b2be415a&sxsrf=ACQVn0_f58V4rprrAJUtA0Whgb5Szg61rw%3A1709602419480&ei=c3bmZaP_HKvKkPIPmMGsSA&ved=0ahUKEwjjhK6n_duEAxUrJUQIHZggCwkQ4dUDCBA&uact=5&oq=nemea+boxing+las+vegas&gs_lp=Egxnd3Mtd2l6LXNlcnAiFm5lbWVhIGJveGluZyBsYXMgdmVnYXMyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjICECZIyBJQTFi8DnACeAGQAQCYAZwBoAHpCKoBAzguM7gBA8gBAPgBAZgCDaACqgnCAgcQIxiwAxgnwgIKEAAYRxjWBBiwA8ICDRAAGEcY1gQYyQMYsAPCAg4QABiABBiKBRiSAxiwA8ICChAjGIAEGIoFGCfCAg4QLhiABBjJAxjHARivAcICBRAAGIAEwgIKEAAYgAQYFBiHAsICCxAAGIAEGIoFGIYDwgIdEC4YgAQYyQMYxwEYrwEYlwUY3AQY3gQY4ATYAQGYAwCIBgGQBgq6BgYIARABGBSSBwM4LjWgB-Y8&sclient=gws-wiz-serp#lrd=0x80c8c1f0f2c4662f:0x55eeedab62d4939,1,,,,"
	);

	console.log(page.url);
	console.log("waiting for selector");
	await page.waitForSelector(".gws-localreviews__general-reviews-block");
	console.log("it's here ! now loop through data...");

	const reviews = await page.evaluate(() => {
		const reviews: Testimonial[] = [];
		let reviewsElement = document.querySelector(
			".gws-localreviews__general-reviews-block"
		);
		if (!reviewsElement) return reviews;
		const names: string[] = [];
		const contents: string[] = [];
		const ratings: number[] = [];
		const dates: string[] = [];

		document.querySelectorAll(".dehysf.lTi8oc").forEach((el) => {
			dates.push(el.textContent || "Not Found");
		});

		document.querySelectorAll(".lTi8oc.z3HNkc").forEach((el) => {
			ratings.push(
				Number(
					el.getAttribute("aria-label")?.split(" ")[1].split(".")[0]
				)
			);
		});

		document.querySelectorAll(".TSUbDb").forEach((el) => {
			names.push(el.childNodes[0].textContent || "Not Found");
		});
		console.log(names);
		document
			.querySelectorAll('span[jscontroller="MZnM8e"]')
			.forEach((el, index) => {
				if (index % 2 == 0)
					contents.push(el.childNodes[0].textContent || "Not Found");
			});
		console.log(contents);

		for (let i = 0; i < names.length; i++) {
			const testimonial: Testimonial = {
				name: names[i],
				testimonial: contents[i],
				rating: ratings[i],
				date: dates[i],
			};
			reviews.push(testimonial);
		}

		return reviews;
	});
	if (!reviews) throw new Error("Selector not found");

	await browser.close();

	return reviews;
}
