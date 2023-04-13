import { FC } from "react";

interface PropsBooks {
  book_picture: string;
  title: string;
  description: string;
  status: string;
  user_name: string;
}
export const CardBooks: FC<PropsBooks> = (props) => {
  const { book_picture, title, description, status, user_name } = props;
  const isAvailable = status === "Available" ? true : false;
  return (
    <div>
      <div className="flex justify-center my-4">
        <img className="w-2/5 " src={book_picture} alt="" />
      </div>
      <h4 className="text-lg md:text-xl font-bold font-sans">{title}</h4>
      <h6 className="text-lg font-medium mt-2 mb-14">Owner : {user_name}</h6>
      <h6 className="text-lg font-medium mt-2 mb-14">Status : {status}</h6>
    </div>
  );
};
