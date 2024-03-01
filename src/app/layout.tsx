import { cn } from "@lib/utils";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
import "react-toastify/dist/ReactToastify.css";
import Containers from "./_content/containers";
import AnalyticScripts from "./_content/analytics";
import Header from "./_content/header";
import Footer from "./_content/footer";
import { ThemeProvider } from "@components/theme-provider";
// import { ANDROID_APP_URL, IOS_APP_URL } from "config";

export const viewport: Viewport = {
	themeColor: "#ea1c26",
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};
// Uncomment and fill out all metadata fields
export const metadata: Metadata = {
	title: {
		template: "%s — Nemea Boxing",
		default: "Nemea Boxing - The #1 Boxing Gym In Las Vegas",
	},
	description: "Description",
	category: "software",
	metadataBase: new URL("https://nemeaboxing.com"),
	openGraph: {
		type: "website",
		locale: "en",
		url: "https://nemeaboxing.com",
		siteName: "",
		title: "",
		description: "",
		images: [
			{
				url: "/logo.svg",
				width: 400,
				height: 400,
				alt: "",
			},
		],
	},
	twitter: {
		creator: "@",
		site: "",
		description: "",
		images: [""],
	},
	creator: "",

	publisher: "",
	keywords: [],
	referrer: "no-referrer-when-downgrade",
	applicationName: "",
	icons: {
		icon: "/icons/favicon.ico",
		apple: "/icons/apple-touch-icon.png",
		shortcut: "/icons/favicon.ico",
	},
	manifest: "/site.webmanifest",
	appleWebApp: {
		title: "",
		statusBarStyle: "black-translucent",
		capable: true,
		startupImage: ["./icons/apple-touch-icon.png"],
	},
	other: {
		handheldFriendly: "true",
	},
};

const inter = Inter({
	variable: "--font-inter",
	display: "swap",
	subsets: ["latin", "latin-ext"],
	adjustFontFallback: true,
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={cn(
				"min-h-screen text-mid-gray-dark",
				inter.className
			)}
		>
			<body className="h-full w-full">
				<Containers />
				<Header />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
				<Footer />
			</body>
			<AnalyticScripts />
		</html>
	);
}
