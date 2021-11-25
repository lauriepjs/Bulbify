import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Join from './Join';

function Taste() {
    let { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://tastedive.com/api/similar?q=${id}`)
      .then((res) => setData(res.data.results));
  });

  return (
    <>
      {data.map((e) => 
        <p>{e.name}</p>)}
    </>
  );

}

export default Taste;
