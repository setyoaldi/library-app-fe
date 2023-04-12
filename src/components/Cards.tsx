import { FC } from "react";
import { PrimButton, SecButton } from "./Button";

interface PropsMyBook {
  book_picture: string;
  title: string;
  description: string;
  status: string;
}

export const CardMyBook: FC<PropsMyBook> = (props) => {
  const { book_picture, title, description, status } = props;
  const isAvailable = status === "Available" ? true : false;

  return (
    <div className="flex flex-row gap-4 items-center border-2 border-slate-300 rounded-lg p-2">
      <img
        src={book_picture}
        className="rounded-lg w-40 h-auto aspect-square mb-3"
      />
      <div className="flex flex-col h-full w-full justify-between">
        <div className="h-[60%] overflow-auto">
          <p>Book title:{title}</p>
          <p>Description:{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <p
            className={`${
              isAvailable ? "text-green-500" : "text-red-500 "
            } w-full text-center font-semibold tracking-wide`}
          >
            {status}
          </p>
          <PrimButton label="Edit Book" />
        </div>
      </div>
    </div>
  );
};
