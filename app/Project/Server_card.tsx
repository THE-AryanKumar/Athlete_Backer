import React from "react";
import Image from "next/image";
import Technology_tag from "../(Body_Section)/Technology_tag";

interface Props {
  data: Project_data;
}
function Server_card({ data }: Props) {
  return (
    <div className="w-full 840:w-auto h-auto mb-[20px] 840:mb-0 relative  overflow-hidden ">
      <div className="w-full 840:w-[800px] 1250:w-[390px] h-auto 1250:h-[210px] rounded-[14px] relative  overflow-hidden   backdrop-blur-sm  m-0 840:m-[10px]  border bg-[#0c0728] hover:bg-[#0e082e] border-[#401f788e] p-[13px] ">
        <div
          className={`w-[200px] h-[20px] ${
            data.indevelopment ? "" : " hidden"
          }  text-[14px]   absolute top-[30px] left-[-60px] bg-teal-500 rotate-[-45deg]
         text-white text-center flex flex-row items-center justify-center z-50`}
        >
          in development
        </div>

        <div>
          <div className="w-full h-auto flex flex-row items-center  justify-between  text-white ">
            <span className=" font-bold text-[18px]  text-slate-200  ">
              {/* {data.title} */}
            </span>
            <div className="w-auto h-auto flex flex-row items-center justify-start my-[10px] ">
              <div className="mr-[10px] ">
                
              </div>
              <a href={data.backend_dowload_link}>
              
              </a>
            </div>
          </div>

          <div className="w-full h-auto ">
            <span className="  text-[14px] text-gray-400">
              {/* {data.project_blog.slice(0, 100)}... */}
            </span>
          </div>
          {/* <Technology_tag data={data} /> */}
        </div>
      </div>
    </div>
  );
}

export default Server_card;
//<Technology_tag data={data} />
