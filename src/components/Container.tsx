import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Contain: FC<Props> = (props) => {
  return (
    <div className="w-[80%] h-[90%] md:w-[60%] md:h-[70%] lg:w-[85%] lg:h-[90%] flex flex-col justify-center items-center bg-slate-100 rounded-2xl">
      {props.children}
    </div>
  );
};
