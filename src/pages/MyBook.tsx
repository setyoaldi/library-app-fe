import { FC, Component, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Contain } from "../components/Container";
import { PrimButton, SecButton } from "../components/Button";
import { CardMyBook } from "../components/Cards";

interface mybookType {
  book_picture: string;
  title: string;
  description: string;
  status: string;
  user_name: string;
}

const MyBook: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [books, setBooks] = useState<mybookType[]>([]);

  // useEffect(() => {
  //   fetchDummy();
  // }, []);

  function fetchData() {}

  return (
    <Layout>
      <Contain>
        <div className="w-full h-full p-14">
          <div className="flex mb-5 justify-between">
            <div>
              <p className="font-semibold text-4xl tracking-wider">
                Your Book Gallery
              </p>
              <p className="mt-2 text-lg">You can add, update delete it!</p>
            </div>
            <div className="flex items-center">
              <PrimButton label="ADD NEW BOOK" />
            </div>
          </div>
          <div className="w-full h-[80%] overflow-auto border border-slate-300 rounded-2xl p-4">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3  w-full">
              <CardMyBook
                book_picture="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSgJHc24cuW_jj0tf6w2bEoaSfbglyVkGBTZmLrczuVLeDFC7fH"
                description=""
                status="Available"
                title=""
                user_name=""
              />
              <CardMyBook
                book_picture=""
                description=""
                status=""
                title=""
                user_name=""
              />
              <CardMyBook
                book_picture=""
                description=""
                status=""
                title=""
                user_name=""
              />
              <CardMyBook
                book_picture=""
                description=""
                status=""
                title=""
                user_name=""
              />
            </div>
          </div>
        </div>
      </Contain>
    </Layout>
  );
};

export default MyBook;
