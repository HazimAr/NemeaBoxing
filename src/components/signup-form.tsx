"use client";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Input } from "@components/ui/input";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";

enum Program {
	Kids = "kids-boxing",
	Teen = "teen-boxing",
	Adult = "adult-boxing",
	SixWeek = "six-week-challenge",
	OpenGym = "open-gym",
}

const formSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	phone: z
		.string()
		.regex(
			new RegExp(
				/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
			),
			"Invalid Number!"
		),
	program: z.nativeEnum(Program),
});

export default function SignUpForm({ noPrograms = false }) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			program: Program.Kids,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		toast.success("You have successfully submitted the form! 🎉");
		toast.success("You will be contacted shortly! 📞");
		form.reset();
		console.log(values);
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="firstName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>First Name</FormLabel>
							<FormControl>
								<Input placeholder="Benjamin" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input placeholder="Stanoff" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="example@hazim.tech"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone</FormLabel>
							<FormControl>
								<Input placeholder="702-720-4948" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{!noPrograms && (
					<FormField
						control={form.control}
						name="program"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Program</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select your program" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value={Program.Kids}>
											Kids Boxing (Ages 6-12)
										</SelectItem>
										<SelectItem value={Program.Teen}>
											Teen Boxing (Ages 13-17)
										</SelectItem>{" "}
										<SelectItem value={Program.Adult}>
											Adult Boxing (Ages 18+)
										</SelectItem>{" "}
										<SelectItem value={Program.SixWeek}>
											6 Week Challenge
										</SelectItem>{" "}
										<SelectItem value={Program.OpenGym}>
											Open Gym
										</SelectItem>
									</SelectContent>
								</Select>

								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				<Button type="submit" className="w-full">
					Submit
				</Button>
			</form>
		</Form>
	);
}
