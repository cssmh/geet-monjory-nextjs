/* eslint-disable prettier/prettier */
import Image from "next/image";

import img1 from "@/src/assets/team.jpg";
import img2 from "@/src/assets/band.jpg";
import img3 from "@/src/assets/artist2.jpg";
import img4 from "@/src/assets/bang2.jpg";

const albums = [
  { image: img1, name: "গ্রাফিটি আড্ডা" },
  { image: img2, name: "আনন্দ মোহন ✌️" },
  { image: img3, name: "কালের সুতোয় জড়িয়ে-পেঁচিয়ে" },
  { image: img4, name: "নাছোড়বান্দা! ♥️" },
];

export default function MeetUs() {
  return (
    <section className="mb-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gradient">Meet Our Team</h2>
        <p className="mt-4 text-base md:text-lg md:w-[60%] mx-auto text-gray-600 dark:text-white">
          Get to know the talented team behind Geet Monjory&lsquo;s music, and
          discover the amazing places we’ve visited that inspired our latest
          releases.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {albums.map((album, index) => (
          <div key={index} className="rounded-lg shadow-lg">
            <div className="w-full h-56 relative overflow-hidden rounded-lg mb-4">
              <Image
                alt={`Album ${index + 1}`}
                className="object-cover w-full h-full"
                height={240}
                src={album.image}
                width={400}
              />
            </div>
            <h3 className="text-sm text-center pb-3">{album.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
