import { FC } from "react";
import { PrimButton, SecButton } from "./Button";

interface PropsMyBook {
  book_picture: string;
  title: string;
  description: string;
  status: string;
  user_name: string;
}

interface PropsHistory {
  title: string;
  start_date?: string;
  end_date: string;
  history?: boolean;
}

export const CardMyBook: FC<PropsMyBook> = (props) => {
  const { book_picture, title, description, status, user_name } = props;
  const isAvailable = status === "Available" ? true : false;

  return (
    <div className="flex flex-row gap-4 items-center border-2 border-slate-300 rounded-lg p-2">
      <img
        src={book_picture}
        className="rounded-lg w-24 h-28 aspect-square mb-3"
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

export const CardHistory: FC<PropsHistory> = (props) => {
  const { title, end_date, start_date, history } = props;

  return (
    <div className="flex flex-row gap-4 items-center border-2 border-slate-300 rounded-lg p-3 ">
      <div className="flex h-full w-full justify-between">
        <p>Book title:{title}</p>

        <div className="flex justify-between items-center">
          {history ? (
            <p
              className={`text-green-500 w-full text-center font-semibold tracking-wide`}
            >
              with in due date: {end_date}
            </p>
          ) : (
            <p
              className={`text-red-500 w-full text-center font-semibold tracking-wide`}
            >
              from: {start_date} to: {end_date}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
