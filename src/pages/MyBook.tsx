import { FC, Component } from "react";
import Layout from "../components/Layout";
import { Contain } from "../components/Container";
import { PrimButton, SecButton } from "../components/Button";

import { CardMyBook } from "../components/Cards";

const MyBook: FC = () => {
  return (
    <Layout>
      <Contain>
        <div>
          <PrimButton label="Primary Button" />
          <SecButton label="Secondary Button" />
          <CardMyBook book_picture="" description="" status="" title="" />
        </div>
      </Contain>
    </Layout>
  );
};

export default MyBook;
