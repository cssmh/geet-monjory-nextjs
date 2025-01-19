import MeetUs from "@/src/components/HomePage/MeetUs";
import GeetMonjory from "@/src/components/HomePage/GeetMonjory";
import ExploreUtube from "@/src/components/HomePage/ExploreUtube";
import PlayMusic from "@/src/components/HomePage/PlayMusic";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-3">
      <GeetMonjory />
      <MeetUs />
      <ExploreUtube />
      <PlayMusic />
    </div>
  );
}
