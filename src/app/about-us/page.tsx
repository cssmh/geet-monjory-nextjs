import geet from "@/src/assets/banner.jpeg";
export default function AboutPage() {
  return (
    <div
      className="pb-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${geet.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-9">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
            About Geet Monjory
          </h2>
          <p className="text-lg mt-4 text-white">
            A journey of soulful music and heartfelt melodies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="leading-relaxed">
              Geet Monjory is a platform where music transcends boundaries. With
              a rich collection of original compositions and collaborations, we
              aim to connect with music enthusiasts worldwide. Our songs are
              crafted to evoke emotions, tell stories, and create unforgettable
              memories.
            </p>
          </div>

          <div className="space-y-6 text-white">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="leading-relaxed">
              To empower artists and listeners by creating a space where
              creativity and passion converge. At Geet Monjory, we strive to
              make music accessible, enjoyable, and inspiring for all.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Join the Melody
          </h3>
          <p className="leading-relaxed mb-6 text-white">
            Whether you&apos;re a musician looking to share your work or a fan
            seeking musical inspiration, Geet Monjory welcomes you to a vibrant
            community. Let&apos;s create magic together through the universal
            language of music.
          </p>

          <div className="mt-6">
            <a
              className="px-8 py-3 bg-violet-600 text-white hover:bg-violet-700 font-medium rounded-lg transition ease-in-out duration-300"
              href="https://www.youtube.com/@geetmonjory8955"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
