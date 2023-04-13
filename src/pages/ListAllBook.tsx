import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { CardBooks } from "../components/CardsBook";
import axios from "axios";

function ListAllBook() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios.get("books").then((response) => {
      const { data } = response.data;
      setBooks(data);
    });
  };

  return (
    <Layout>
      <div className="grid md:flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:w-4/5 md:w-3/4 px-12">
          {books.map((book) => {
            const title = `${book.title}`;
            return (
              <CardBooks
                key={book.Book_id}
                title={book.title}
                book_picture={book.pictures}
                status={book.status}
                user_name={book.user_name}
                description={book.description}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ListAllBook;
