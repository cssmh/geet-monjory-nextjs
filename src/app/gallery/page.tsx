import Image from "next/image";

import img1 from "@/src/assets/monjory_singer.jpg";
import img2 from "@/src/assets/artist2.jpg";
import img3 from "@/src/assets/img.jpg";
import img4 from "@/src/assets/img2.jpg";
import img5 from "@/src/assets/img3.jpg";
import img6 from "@/src/assets/img4.jpg";
import img7 from "@/src/assets/img6.jpg";
import img8 from "@/src/assets/img5.jpg";
import img9 from "@/src/assets/img7.jpg";
import img10 from "@/src/assets/img8.jpg";
import img11 from "@/src/assets/img9.jpg";
import img12 from "@/src/assets/img10.jpg";
import { MagicCard } from "@/src/components/ui/magic-card";

export default function GalleryPage() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  // eslint-disable-next-line padding-line-between-statements
  return (
    <div className="max-w-7xl mx-auto mt-2 mb-8 px-4">
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images?.map((image, index) => (
          <div
            key={index}
            className="mb-4 transform transition-transform hover:scale-105"
          >
            <MagicCard>
              <Image
                alt={`Gallery Image ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
                height={200}
                src={image}
                width={300}
              />
            </MagicCard>
          </div>
        ))}
      </div>
    </div>
  );
}
