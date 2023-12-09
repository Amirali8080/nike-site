import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
function Hero() {
  const [bigShoeImg, setBigShowImg] = useState(bigShoe1);
  return (
    <section className="padding flex h-[100vh] w-full flex-col gap-5 lg:flex-row">
      <div className=" relative mt-12 flex flex-col items-start justify-center gap-1 lg:mt-[8rem] lg:w-2/5">
        <p className=" max-w-xs font-montserrat text-coral-red">
          Our summer collections
        </p>
        <h1
          className="lg:text lg:text-6xl z-30 
        mt-10 font-palanquin
        text-[90px] font-bold max-sm:text-[72px] max-sm:leading-[72px] xl:text-8xl"
        >
          <span
            className="relative z-10 pr-10 
            max-xl:whitespace-nowrap
          max-md:whitespace-normal
          lg:bg-white xl:whitespace-nowrap xl:bg-white"
          >
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>

        <p className="py-4 font-montserrat leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button icon={arrowRight}>Shop now</Button>
        <ul className="mt-5 flex flex-wrap items-start justify-start gap-16 lg:mt-6">
          {statistics.map((statistic) => (
            <li key={statistic.label}>
              <div className="font-montserrat text-2xl font-bold text-slate-800">
                {statistic.value}
              </div>
              <div className="font-montserrat text-sm leading-7 text-slate-gray">
                {statistic.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex flex-1  items-center justify-center rounded-lg bg-primary bg-hero bg-cover bg-center px-6 max-xl:py-10 lg:min-h-screen  lg:min-w-[50%]">
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          className="relative z-10
          min-h-[502px]
          min-w-[450px] max-w-[450px] 
          object-contain px-10 sm:px-4
          "
        />
        <div className="absolute -bottom-[5%] flex  gap-4 max-sm:px-6 sm:-bottom-[7%] sm:left-[5%] ">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imageUrl={shoe}
                changeBigShoeImage={setBigShowImg}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
