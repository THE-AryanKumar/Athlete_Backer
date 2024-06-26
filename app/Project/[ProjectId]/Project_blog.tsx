"use client";
import React from "react";
import { useState, useEffect } from "react";
import Project_video from "./Project_video";
import Dependencies from "./Dependencies";
import Link from "next/link";
import Image from "next/image";
interface Props {
  Single_data: Project_data[];
}

function Project_blog({ Single_data }: Props) {
  const [ifreamload, setifreamload] = useState<boolean>(false);
  const [havecopy, sethavecopy] = useState<boolean>(false);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    const handleLoad = () => {
      setifreamload(true);
    };
    if (iframe) {
      iframe.addEventListener("load", handleLoad, true);
    }
  }, []);

  const Copy = () => {
    sethavecopy(true);
    navigator.clipboard.writeText(
      "yarn add @react-navigation/native-stack @react-navigation/native"
    );
  };

  console.log(Single_data[0].video_key, "Single_data.video_key");

  return (
    <div className=" w-full 800:w-[800px] h-auto flex flex-col  items-start justify-start px-[10px] 600:px-[15px] 800::px-0  ">
      <div className=" font-bold text-[25px] text-slate-200 ">
        {Single_data[0].title}
      </div>
      <Project_video ifreamload={ifreamload} src={Single_data[0].video_key} />
      <div className=" my-[20px]">
        <span className=" font-bold text-slate-200 text-[23px] ">
          {Single_data[0].say_xi}
        </span>
      </div>
      <div className="">
        <p className=" text-gray-300 text-[15px]">
          {Single_data[0].say_xi_blog}
        </p>
      </div>
      <span className=" font-bold text-slate-200 text-[23px] mt-[15px] ">
        Tags
      </span>
      <ul className="list-disc ml-[20px] mt-[10px] text-slate-200 ">
        {Single_data[0].technology_feature.map((data: string) => (
          <li key={data}>{data}</li>
        ))}
      </ul>
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] ">
        Background
      </span>
      <p className="text-gray-300 text-[15px]">
        {Single_data[0].about_this_app}
      </p>
      <Dependencies Single_data={Single_data[0]} />
      <span className=" my-[20px] font-bold text-slate-200 text-[23px] select-none ">
        Links
      </span>
      <div className=" w-auto h-auto flex flex-row items-center justify-start 600:justify-between  flex-wrap  ">
        <a
          href={Single_data[0].youtube_link}
          className="px-[20px] py-[5px] mr-[10px] mb-[10px] 600:mb-0 rounded-[6px] bg-white flex flex-row active:scale-90 transition-all duration-150 select-none items-center cursor-pointer hover:bg-[#f3f3f3] "
        >
          <Image
            src={"/youtube-svgrepo-com.svg"}
            className="w-[25px] h-auto"
            width={1920}
            height={1080}
            alt=""
          />
          <span className="text-black  font-bold text-[14px] ml-[6px] ">
            Youtube
          </span>
        </a>
      </div>
      <Link
        href={"/Project"}
        className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[20px] "
      >
        Go Back To
        <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
          Projects
        </span>
      </Link>
      <div className="w-full h-auto pb-[100px] "></div>
    </div>
  );
}

export default Project_blog;
