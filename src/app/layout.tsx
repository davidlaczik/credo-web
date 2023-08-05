import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: "Crevo - Free CV Maker",
	description: "",
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
