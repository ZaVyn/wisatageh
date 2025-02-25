import Achievement from "@/components/halaman_utama/Achievement";
import CallToAction from "@/components/halaman_utama/CallToAction";
import { TestimoniUsers } from "@/components/halaman_utama/TestimoniUsers";
import InterestingWisata from "@/components/halaman_utama/InterestingWisata";
import { Footer } from "@/components/halaman_utama/Footer";
import PaketWisata from "@/components/halaman_utama/PaketWisata";

export default function Home() {
  return (
    <>
      <CallToAction/>
      <Achievement/>
      <InterestingWisata/>
      <PaketWisata/>
      <TestimoniUsers/>
      <Footer/>
    </>
  );
}
