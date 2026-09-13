import React, { use, useState } from "react";
import { toast } from "react-toastify";
import Card from "./Card";
import CardSelect from "./CardSelect";
import type { TechTypeProps } from "../types/TechTypeProps";
import type { ExploreTypeProps } from "../types/ExploreTypeProps";

const Explore = ({ fetchdata }: ExploreTypeProps) => {
  const data = use(fetchdata);

  const [stack, setStack] = useState<TechTypeProps[]>([]);

  const handleAdd = (tech: TechTypeProps) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack((item) => [...item, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  };
  return (
    <>
      <div className="Explore-section container mx-auto my-3.5" id="explore">
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
                {data.map((tech) => (
                  <Card key={tech.id} {...tech} onAdd={handleAdd} isAdded={stack.some((item)=>item.id === tech.id)} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-400 py-10">
                No technologies found.
              </p>
            )}
            <CardSelect
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
        <div className="divider w-[30px] h-1 my-10 mx-auto bg-gray-200"></div>
      </div>
    </>
  );
};

export default Explore;
