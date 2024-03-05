import getReviews from "@lib/reviews";
import Hero from "./_content/hero";

import Programs from "./_content/programs";
import Testimonials from "./_content/testimonials";
import Trainers from "./_content/trainers";

export default async function Page() {
	const testimonials = await getReviews();
	return (
		<>
			<Hero />
			<Programs />
			<Trainers />
			<Testimonials testimonials={testimonials} />
		</>
	);
}

export const revalidate = 3600; // revalidate at most every hour
