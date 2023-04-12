import { FC } from "react";

interface PropsMyBook {
  book_picture: string;
  title: string;
  description: string;
  status: string;
  user_name: string;
}

export const CardMyBook: FC<PropsMyBook> = (props) => {
  const { book_picture, title, description, status, user_name } = props;

  return (
    <div className="flex flex-col items-center border-2 border-slate-50 rounded-lg p-2">
      <img
        className="rounded-full w-20 aspect-square mb-3"
        src={book_picture}
        alt={`${title} picture`}
      />
      Cards
    </div>
  );
};
