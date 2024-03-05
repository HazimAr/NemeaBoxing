// import puppeteer from "puppeteer";

// export default async function getReviews(url: string) {
// 	console.log("Launching headless chrome...");
// 	url = url.toString();
// 	const browser = await puppeteer.launch({
// 		args: ["--disabled-setuid-sandbox", "--no-sandbox"],
// 	});
// 	const page = await browser.newPage();
// 	console.log("going to url");
// 	await page.goto(url);
// 	console.log(page.url);
// 	console.log("waiting for selector");
// 	await page.waitForSelector(".jftiEf")

// 	console.log("it's here ! now loop through data...");
// 	const data = await page.evaluate(() => {
// 		let temp = document.querySelector(".jftiEf");
// 		console.log(temp);
// 		return temp;
// 		if (!temp) throw new Error("Selector not found");
// 		temp = temp?._?.childNodes[temp?._?.childNodes.length - 2];

// 		let reviewAuthorNamesClasses = document.getElementsByClassName(
// 			"section-review-title"
// 		);
// 		let reviewAuthorNames = [];
// 		// @ts-expect-error html types are not recognized
// 		for (let elements of reviewAuthorNamesClasses) {
// 			reviewAuthorNames.push(elements.innerText);
// 		}
// 		let datesClasses = document.getElementsByClassName(
// 			"section-review-publish-date"
// 		);
// 		let dates = [];
// 		// @ts-expect-error html types are not recognized
// 		for (let elements of datesClasses) {
// 			dates.push(elements.innerText);
// 		}

// 		let ratingsClasses = document.getElementsByClassName(
// 			"section-review-stars"
// 		);
// 		let ratings = [];
// 		// @ts-expect-error html types are not recognized
// 		for (let elements of ratingsClasses) {
// 			ratings.push(elements.children.length);
// 		}

// 		let reviewsContentClasses = document.getElementsByClassName(
// 			"section-review-text"
// 		);
// 		let reviewsContent = [];
// 		// @ts-expect-error html types are not recognized
// 		for (let elements of reviewsContentClasses) {
// 			reviewsContent.push(elements.innerText);
// 		}
// 		return {
// 			reviewAuthorNames,
// 			dates,
// 			ratings,
// 			reviewsContent,
// 		};
// 	});
// 	console.log("done ! closing browser...");
// 	browser.close();
// 	console.log(data);
// 	return new Promise((resolve, reject) => {
// 		resolve(data);

// 		if (reject) {
// 			reject({ error: "error while scraping data." });
// 		}
// 	});
// }

import puppeteer from "puppeteer";
import { Testimonial } from "types";

export default async function getReviews() {
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
