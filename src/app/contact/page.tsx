import SignUpForm from "@components/signup-form";
import {
	FacebookIcon,
	InstagramIcon,
	MapPinIcon,
	PhoneIcon,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<section className="flex justify-center">
			<div className="py-20 px-8 max-w-7xl w-full">
				<div className="flex">
					<div className="flex flex-col flex-1 gap-8">
						<h1 className="font-bold">
							Contact <span className="text-primary">Us</span>
						</h1>
						<div className="flex flex-col gap-4">
							<div className="flex gap-2 hover:text-primary">
								<PhoneIcon />
								<Link href="tel:+1-702-720-4948">
									+1 702-720-4948
								</Link>
							</div>
							<div className="flex gap-2 hover:text-primary">
								<MapPinIcon />
								<Link
									href="https://maps.apple.com/?q=Nemea+Boxing+Las+Vegas+Nevada"
									target="_blank"
								>
									3874 W Sahara Ave, Las Vegas, NV 89102
								</Link>
							</div>
						</div>
						<div className="flex">
							<Link
								href="https://www.instagram.com/nemeaboxinggym/"
								target="_blank"
								className="hover:text-primary"
							>
								<InstagramIcon size={32} />
							</Link>
							<Link
								href="https://www.facebook.com/p/Nemea-Boxing-Gym-100092228926446"
								target="_blank"
								className="hover:text-primary"
							>
								<FacebookIcon size={32} />
							</Link>
						</div>
					</div>
					<div className="flex-1">
						<SignUpForm />
					</div>
				</div>
			</div>
		</section>
	);
}
