"use client"
import FixedNav from "./ui-components/navs/web/FixedNav";
import TopNav from "./ui-components/navs/web/TopNav";
  
 
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen text-black text-5xl">
              <TopNav/>
              <FixedNav/>
        Home españa content
    </div>
  );
}
