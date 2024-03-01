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
			className={cn("min-h-screen text-mid-gray-dark", inter.className)}
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

				<script>
					{`
  window.__ow = window.__ow || {};
  window.__ow.organizationId = "d42a8dfa-a2d3-41d0-b181-3cdb183e5094";
  ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
`}
				</script>
				<noscript>
					You need to{" "}
					<a
						href="https://www.openwidget.com/enable-javascript"
						rel="noopener nofollow"
					>
						enable JavaScript
					</a>{" "}
					to use the communication tool powered by{" "}
					<a
						href="https://www.openwidget.com/"
						rel="noopener nofollow"
						target="_blank"
					>
						OpenWidget
					</a>
				</noscript>
			</body>
			<AnalyticScripts />
		</html>
	);
}
