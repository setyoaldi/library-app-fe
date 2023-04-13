import { FC, Component, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Contain } from "../components/Container";
import { PrimButton, SecButton } from "../components/Button";
import { CardHistory } from "../components/Cards";

import { Tab } from "@headlessui/react";

interface historyType {
  title: string;
  start_date: string;
  end_date: string;
}

const History: FC = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories] = useState({
    Borrowed: [],
    History: [],
  });

  return (
    <Layout>
      <Contain>
        <div className="w-full h-full p-14">
          <Tab.Group>
            <Tab.List className="flex space-x-4 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-900",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-full h-[90%] mt-3 overflow-auto border border-slate-300 rounded-2xl p-4">
              <Tab.Panel>
                <div className="grid gap-4 grid-cols-1 w-full">
                  <CardHistory end_date="wef" title="" start_date="" history />
                  <CardHistory end_date="wef" title="" start_date="" history />
                  <CardHistory end_date="wef" title="" start_date="" history />
                  <CardHistory end_date="wef" title="" start_date="" history />
                  <CardHistory end_date="wef" title="" start_date="" history />
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid gap-4 grid-cols-1 w-full">
                  <CardHistory end_date="wef" title="" start_date="" />
                  <CardHistory end_date="wef" title="" start_date="" />
                  <CardHistory end_date="wef" title="" start_date="" />
                  <CardHistory end_date="wef" title="" start_date="" />
                  <CardHistory end_date="wef" title="" start_date="" />
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Contain>
    </Layout>
  );
};

export default History;
