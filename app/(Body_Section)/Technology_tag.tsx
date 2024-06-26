import React from "react";

interface Props {
  data: Project_data;
}

function Technology_tag({ data }: Props) {
  return (
    <div className="w-full h-auto flex flex-row items-center flex-wrap mt-[10px] ">
      <div
        className={`tag ${
          data.technology_feature.includes("html") ? "" : " hidden"
        }  bg-[#E54F24]    text-white  `}
      >
        Rifle Shooter
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("css") ? "" : " hidden"
        }  bg-[#2062AF]    text-white `}
      >
        Golf
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Javascript") ? "" : " hidden"
        }  bg-[#F0DB4F]    text-black `}
      >
        England
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Tailwind") ? "" : " hidden"
        }  bg-[#4ad7f0]    text-[#258899] `}
      >
        Trekking
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React") ? "" : " hidden"
        }   bg-[#83e0f8]    text-[#226879] `}
      >
        Football
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("React Native") ? "" : " hidden"
        }  bg-[#83e0f8]    text-[#1b859f] `}
      >
        Karate
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Tauri") ? "" : " hidden"
        }  bg-[#FFC131]    text-[#44a1ab] `}
      >
        American
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Redux") ? "" : " hidden"
        }  bg-[#764ABC]    text-white `}
      >
        Rifle Shooter
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("ReactQuery") ? "" : " hidden"
        }  bg-[#FF4154]    text-white `}
      >
        ReactQuery
      </div>

      <div
        className={`tag ${
          data.technology_feature.includes("Under - 18") ? "" : " hidden"
        }  bg-[#2D79C7]    text-[#b0cae4] `}
      >
        Under - 18
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Next js 13") ? "" : " hidden"
        }  bg-[#13224a]    text-[#fdfdfd]  `}
      >
        Swimmer
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Node js") ? "" : " hidden"
        }  bg-[#79B562]    text-[#fdfdfd] `}
      >
        Node js
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Golang") ? "" : " hidden"
        }  bg-[#00ACD7]    text-[#fdfdfd] `}
      >
        Go
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Gin") ? "" : " hidden"
        }  bg-[#0090D1]    text-[#f1db4b] `}
      >
        Wresling
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Squash") ? "" : " hidden"
        }  bg-[#333331]    text-gray-300 `}
      >
        Squash
      </div>

      <div
        className={`tag ${
          data.technology_feature.includes("Mongo db") ? "" : " hidden"
        }  bg-[#10AA50]    text-[#fdfdfd]  `}
      >
        Mongo db
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("chess") ? "" : " hidden"
        }  bg-[#e9b422]    text-[#fdfdfd]  `}
      >
        Chess
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Male") ? "" : " hidden"
        }  bg-[#336791]    text-[#fdfdfd]  `}
      >
        Male
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("My sql") ? "" : " hidden"
        }  bg-[#01526A]    text-[#fdfdfd]  `}
      >
        My sql
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Framer Motion") ? "" : " hidden"
        }  bg-[#ff13ffd3]   text-[#fdfdfd] `}
      >
        Para Olympics
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Female") ? "" : " hidden"
        }   bg-[#E632AD]     text-[#fdfdfd] `}
      >
        Female
      </div>
      <div
        id="cursive"
        className={`tag ${
          data.technology_feature.includes("JWT") ? "" : " hidden"
        }  bg-[#000000]    text-[#fdfdfd] flex flex-row font-semibold `}
      >
        <span className=" text-[#CB37F2] mr-[3px]">Json</span>
        <span className=" text-[#00B0E5]  mr-[3px]">Web</span>
        <span className=" text-[#EE0156]">Tocken</span>
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Prisma") ? "" : " hidden"
        }  bg-[#123A50]    text-[#fdfdfd]  `}
      >
        Prisma
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Docker") ? "" : " hidden"
        }  bg-[#2496ED]    text-[#fdfdfd]  `}
      >
        Docker
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Indian") ? "" : " hidden"
        }  bg-[#665BFF]    text-[#fdfdfd]  `}
      >
        Indian
      </div>
      <div
        className={`tag ${
          data.technology_feature.includes("Expo") ? "" : " hidden"
        }  bg-[#422EDF]    text-[#fdfdfd]  `}
      >
        Expo
      </div>
    </div>
  );
}

export default Technology_tag;
