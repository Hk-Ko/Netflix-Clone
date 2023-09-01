import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#141414] h-full p-5 lg:p-0">
      <div className="block lg:hidden">
        <div className="flex flex-wrap items-center gap-5 justify-center">
          <p className="text-gray-400">Terms of Use</p>
          <p className="text-gray-400">Privacy Statment</p>
          <p className="text-gray-400">Cookie Preferences</p>
          <p className="text-gray-400">Help Center</p>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-col gap-3 w-[75%] mx-auto">
          <div className="flex items-center justify-start gap-5 w-full">
            <BiLogoFacebook className="text-white text-3xl cursor-pointer" />
            <BiLogoInstagram className="text-white text-3xl cursor-pointer" />
            <BiLogoTwitter className="text-white text-3xl cursor-pointer" />
            <BiLogoYoutube className="text-white text-3xl cursor-pointer" />
          </div>

          <div className="flex items-center gap-28">
            <div className="flex flex-col gap-4">
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Audio Description
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Investor Relations
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Legal Notices
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Help Center
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Jobs
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Cookie Preferences
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Gift Cards
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Terms of Use
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Coporate Information
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Media Center
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Privacy
              </p>
              <p className="hover:underline text-sm text-gray-400 transition cursor-pointer">
                Contact Us
              </p>
            </div>
          </div>

          <div className="mt-5">
            <button className="px-1 py-2 text-sm text-gray-400 hover:text-white border border-gray-400 duration-500">
              Service Code
            </button>
          </div>

          <div className="mt-2">
            <p className="text-[10px] text-gray-400">@1997-2023 Netflix,Inc</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
