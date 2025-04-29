/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
const Footer = () => {
  return (
    <footer className="border-t border-neutral dark:border-gray-700 py-7 md:py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-base-content">
        <div className="flex flex-col lg:flex-row gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-base-content">
              Geet Monjory
            </h2>
            <p className="lg:w-2/3 text-base-content/75">
              Celebrate the joy of music with Geet Monjory. Connecting music
              lovers, artists, and communities worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-base-content">
              Contact Information
            </h3>
            <p className="mb-2">Email: sheikhsaju1976@gmail.com</p>
            <p className="mb-2">Phone: +8801780710904</p>
            <p className="mb-2">
              23/1 Maa Palace, Zilla School Road, Mymensingh
            </p>
          </div>
        </div>
        <div className="border-t border-neutral dark:border-gray-700 my-6"></div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Geet Monjory. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://www.facebook.com/khubaedsiam"
              className="text-green-400 underline font-semibold dark:text-green-500 hover:underline"
            >
              Khubaed Islam Siam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
