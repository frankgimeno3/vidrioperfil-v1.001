import FixedNav from "./ui-components/navs/web/FixedNav";
import NavWeb from "./ui-components/navs/web/TopNav";

 
export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
       <NavWeb/>
       <FixedNav/>
    </div>
  );
}
