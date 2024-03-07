import { Button } from "@components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@components/ui/dialog";

import Containers from "app/_content/containers";
import SignUpForm from "./signup-form";

export function SignUpButton({
	button = "Free Intro Visit",
	title = (
		<>
			Fill out the form for a{" "}
			<span className="text-primary font-black">FREE Intro Visit</span>
		</>
	),
	noPrograms = false,
	className = "",
	...props
}: {
	button?: React.ReactNode;
	title?: React.ReactNode;
	noPrograms?: boolean;
	className?: string;
	props?: React.ComponentProps<typeof Button>;
}) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className={className} {...props}>
					{button}
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<Containers />
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				<SignUpForm noPrograms={noPrograms} />
				<DialogFooter>
					<Button type="submit">Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
