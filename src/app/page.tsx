import MeetUs from "@/src/components/HomePage/MeetUs";
import GeetMonjory from "@/src/components/HomePage/GeetMonjory";
import ExploreUtube from "@/src/components/HomePage/ExploreUtube";
import PlayMusic from "@/src/components/HomePage/PlayMusic";
import SocialStats from "@/src/components/HomePage/SocialStats";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-3">
      <GeetMonjory />
      <SocialStats />
      <MeetUs />
      <ExploreUtube />
      <PlayMusic />
    </div>
  );
}
