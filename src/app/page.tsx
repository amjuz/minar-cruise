import Image from "next/image";
import { Button } from "@/components/ui/button"
import HomeVideo from "@/components/home/HomeVideo";
import LandingDescription from "@/components/home/LandingDescription";
import BookingDescription from "@/components/home/BookingDescription";
import Facilities from "@/components/home/Facilities";


export default function Home() {
  return (
    <main className="">
      <HomeVideo/>
      <LandingDescription/>
      <BookingDescription/>
      <Facilities/>
    </main>
  );
}
