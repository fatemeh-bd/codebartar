import WhayUs from "@/app/_components/landing/WhayUs";
import HeroSection from "./_components/landing/HeroSection";
import LastCourses from "./_components/landing/LastCourses/LastCourses";
import LandingComments from "./_components/landing/LandingComments/LandingComments";
import InfoSection from "./_components/landing/InfoSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhayUs />
      <LastCourses />
      <LandingComments />
      <InfoSection />
    </>
  );
}
