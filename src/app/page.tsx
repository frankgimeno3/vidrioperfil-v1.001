"use client"
import ArticleRow from "./ui-components/articles/ArticleRow";
import HeroSection from "./ui-components/articles/HeroSection";
import FixedNav from "./ui-components/navs/web/FixedNav";
import TopNav from "./ui-components/navs/web/TopNav";


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen  ">
      <TopNav isLoggedIn={false} />
      <FixedNav sectionSelected={"home"} />
      <div className="px-24 py-5 text-gray-500">
        <HeroSection />
        <div className="flex flex-col">
          <ArticleRow />
          <ArticleRow />
          <ArticleRow />
        </div>
      </div>
    </div>
  );
}
