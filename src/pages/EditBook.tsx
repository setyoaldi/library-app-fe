import { FC, Component, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Contain } from "../components/Container";
import { PrimButton, SecButton } from "../components/Button";
import { InputMyBook, TextAreaMyBook } from "../components/Inputs";

interface PropsMyBook {
  book_picture: string;
  title: string;
  description: string;
  status: string;
}

const EditBook: FC = () => {
  return (
    <Layout>
      <Contain>
        <div className="w-full h-full p-14">
          <div className="flex mb-3 justify-between">
            <div>
              <p className="font-semibold text-4xl tracking-wider">EDIT BOOK</p>
            </div>
          </div>
          <div className=" flex h-[90%] gap-5 overflow-auto border border-slate-300 rounded-2xl p-4">
            <div className="w-[50%] h-auto">
              <img
                src="/"
                className="bg-slate-300 rounded-lg  aspect-square mb-3"
              />
            </div>
            <form className="w-full flex flex-col gap-2">
              <InputMyBook id="input-booktitle" placeholder="Book Title" />
              <div className="flex justify-between w-full gap-4">
                <InputMyBook id="input-bookpublisher" placeholder="Publisher" />
                <InputMyBook id="input-bookyear" placeholder="Year" />
              </div>
              <InputMyBook id="input-bookcategory" placeholder="Category" />
              <InputMyBook
                id="input-bookimage"
                placeholder="Image"
                type="file"
              />
              <TextAreaMyBook
                id="input-bookdescription"
                placeholder="Description"
              />
              <div className="flex justify-end">
                <div className="flex gap-5 w-[35%]">
                  <SecButton label="DELETE" />
                  <PrimButton label="SAVE" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Contain>
    </Layout>
  );
};

export default EditBook;
