import FeedCard from "@/components/FeedCard";
import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

interface TwitterSodebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSodebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notification",
    icon: <BsBell />,
  },

  {
    title: "Message",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 min-h-screen w-full max-w-screen-xl mx-auto px-4">
        <div className="col-span-3 pl-10 ml-10">
          <div className="text-4xl cursor-pointer h-fit w-fit hover:bg-gray-800 rounded-full p-4 transition-all">
            <BsTwitter />
          </div>
          <div className="mt-2 text-xl pr-4">
            <ul>
              {SidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer mt-3"
                  key={item.title}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] font-semibold  text-lg rounded-full w-full py-2 px-4 ">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 border-r-[1px] border-l-[1px]  h-screen overflow-y-scroll border-gray-500 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 bg-black">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
