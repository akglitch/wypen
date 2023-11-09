import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroInitial from "@/components/About";
import Herotwo from "@/components/Herotwo";
import Services from "@/components/Services";
import Team from "@/components/Team";

import { Navbar } from "@/components/navbar";



export default function IndexPage() {
	return (
	<>
	<Navbar />
	<Header />
	<HeroInitial />
	<Hero />
	
	<Services />
		<Herotwo />
	<Team />
	<Contact />
	<Footer />
	</>
	);
}
