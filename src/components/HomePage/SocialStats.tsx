/* eslint-disable prettier/prettier */
import NumberTicker from "../ui/number-ticker";
export default function SocialStats() {
  return (
    <div className="py-4 md:py-8 rounded-lg">
      <h1 className="text-2xl md:text-3xl font-semibold text-center mb-3">
        Social Media Stats
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-blue-600 mb-2 md:mb-4">
            Facebook
          </h2>
          <div className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
            <NumberTicker value={55000} />
          </div>
          <p className="text-lg text-center">Followers</p>
        </div>
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-red-600 mb-2 md:mb-4">
            YouTube
          </h2>
          <div className="flex items-center text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
            <NumberTicker value={1290} />
            <span>K</span>
          </div>
          <p className="text-lg text-center">Subscribers</p>
        </div>
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-red-600 mb-2 md:mb-4">
            YouTube Videos
          </h2>
          <div className="text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
            <NumberTicker value={225} />
          </div>
          <p className="text-lg text-center">Total Videos</p>
        </div>
        <div className="p-6 rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl text-center font-bold text-green-600 mb-2 md:mb-4">
            Total Members
          </h2>
          <div className="flex items-center text-3xl md:text-5xl font-semibold mb-2 md:mb-4">
            <NumberTicker value={15} />
            <span>+</span>
          </div>
          <p className="text-lg text-center">Community Members</p>
        </div>
      </div>
    </div>
  );
}
