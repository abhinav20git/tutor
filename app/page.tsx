import Navbar from "@/components/Navbar";
import HomeworkHelpLanding from "@/components/Hero";
import TrustBadges from "@/components/TrustPage";
import FAQ from "@/components/Faq";
import Works from "@/components/Works";
import Reviews from "@/components/Reviews";
import StudyBay from "@/components/study-bay";
import ReachOut from "@/components/ReachOut";
export default function Home() {
  return (
    <div className="bg-[#F5F3EF]">
      <Navbar /> 
      <HomeworkHelpLanding />
      <TrustBadges />
      <Works/>
      <StudyBay/>
      <Reviews/>
      <FAQ/>
      <ReachOut/>
    </div>
  );
}
