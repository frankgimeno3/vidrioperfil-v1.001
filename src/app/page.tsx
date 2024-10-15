"use client"
import FixedNav from "./ui-components/navs/web/FixedNav";
import TopNav from "./ui-components/navs/web/TopNav";
  
 
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen  ">
              <TopNav/>
              <FixedNav sectionSelected={""}/>
       <p className="text-5xl text-black"> Home españa content</p>
    </div>
  );
}
