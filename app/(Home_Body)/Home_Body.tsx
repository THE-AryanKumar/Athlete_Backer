import React from "react";
import Section_1 from "../(Body_Section)/Section_1";
import Section_3 from "../(Body_Section)/Section_3";
import Section_3a from "../(Body_Section)/Section_3a";
import Section_4 from "../(Body_Section)/Section_4";
import Section_5 from "../(Body_Section)/Section_5";
import Aadi from "../(Aadi_Special)/aadi";
function Home_Body() {
  return (
    <div className=" w-auto h-auto m-auto ">
      <Section_1 />
      <Aadi />
      <Section_4 />
      <Section_3 />
      <Section_3a />
    </div>
  );
}

export default Home_Body;


 