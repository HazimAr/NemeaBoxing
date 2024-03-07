import Hero from "./_content/hero";

import Programs from "./_content/programs";
import Testimonials from "./_content/testimonials";
import Trainers from "./_content/trainers";

export default async function Page() {
	return (
		<>
			<Hero />
			<Programs />
			<Trainers />
			<Testimonials />
		</>
	);
}

export const revalidate = 3600; // revalidate at most every hour
