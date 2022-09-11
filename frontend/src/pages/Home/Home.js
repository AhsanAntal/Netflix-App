import { useEffect } from "react";
import Featured from "../../Components/Featured/Featured";
import List from "../../Components/List/List";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import "./home.scss";
import React from "react";

export default function Home({ type }) {
  const [list, setList] = React.useState([]);

  const [genre, setGenre] = React.useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/lists ${type ? "?type" + type : ""}${
            genre ? "?genre" + genre : ""
          }`,
          {
            headers: {
              token:
                " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMTgzNjVmOGFlNDg2NTg4OGNkZjNmOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mjg5NzU1NywiZXhwIjoxNjYzMzI5NTU3fQ.LJWXO2UBoWRy7akorV8TW9az3PreAAf1DpHErWnnntI",
            },
          }
        );

        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />

      {list.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
}
