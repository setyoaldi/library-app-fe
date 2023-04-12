import React, { FC } from "react";
import Layout from "../components/Layout";
import { PrimButton } from "../components/Button";
import { Contain } from "../components/Container";
import hero1 from "../assets/hero1.jpg";
import { BsArrowRight } from "react-icons/bs";

const LandingPage: FC = () => {
  const responsive = screen.width;
  return (
    <Layout>
      <section className="w-full md:h-96 lg:h-[80vh] py-4 px-20 grid grid-cols-1 md:grid-cols-2 text-center text-[#19345E]">
        <div className="flex flex-col mb-16 justify-start lg:mt-16 xl:mt-24 2xl:mt-44 gap-5 2xl:gap-10">
          <p className="font-semibold lg:text-4xl 2xl:text-6xl text-left">
            Lets Make Your Day Better
          </p>
          <p className="text-xl md:text-6xl 2xl:text-6xl font-bold text-left">
            Welcome To <br /> E - Perpus.
          </p>
          <p className="font-semibold lg:text-xl 2xl:text-3xl text-left">
            Read-Learn-Loop
          </p>
          <button className="item-center justify-between bg-[#19345E] text-slate-200 font-semibold px-4 pb-1 border border-white hover:bg-[#1A3BC3] active:bg-[#2c4fdd] disabled:bg-[#3f4958] w-40 h-10">
            Explore
          </button>
        </div>
        {responsive > 767 ? (
          <div>
            <img className="w-3/4" src={hero1} alt="Hero 1 picture" />
          </div>
        ) : (
          ""
        )}
      </section>
    </Layout>
  );
};

export default LandingPage;
