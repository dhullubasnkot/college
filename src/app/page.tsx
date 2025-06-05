// import Link from "next/link";
// import Hello from "./hello/[id]/page";

import Footer from "./components/footer";
import Header from "./components/header";
import { Navbar1 } from "./components/navbar";
import HeroCarousel from "./home/page";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar1 />
      <HeroCarousel />
      <Footer />
    </>
  );
}
