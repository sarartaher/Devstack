import React, { use } from "react";
import Card from "./Card";
import CardSelect from "./CardSelect";
import type { TechTypeProps } from "../types/TechTypeProps";
import type { ExploreTypeProps } from "../types/ExploreTypeProps";

const Explore = ({ fetchdata }: ExploreTypeProps) => {
  const data = use(fetchdata);
  return (
    <>
      <div className="Explore-section container mx-auto my-3.5">
        <div>
          <div className="max-sm:flex-col max-sm:justify-items-center">
            <h1 className="text-5xl font-semibold max-sm:text-4xl">
              Explore The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#7F00FF]">
                {" "}
                Technologies{" "}
              </span>
            </h1>
            <p className="text-xl my-2.5 text-[#475569] ">
              Pick one technology per category build your ideal stack
            </p>
          </div>
          <div className="cards flex gap-6 mx-auto container max-sm:flex-col max-sm:justify-items-center">
            {data && data.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {data.map((stack) => (
                  <Card key={stack.id} {...stack} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-400 py-10">
                No technologies found.
              </p>
            )}
            <CardSelect />
          </div>
        </div>
        <div className="divider w-[30px] h-1 my-10 mx-auto bg-gray-200"></div>
      </div>
    </>
  );
};

export default Explore;
