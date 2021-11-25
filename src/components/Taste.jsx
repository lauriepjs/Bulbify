import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router";

function Taste() {
    // let { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://tastedive.com/api/similar?q=Adele&info=1`)
      .then((res) => setData(res.data.results));
  });

  return (
    <div>
      {data.map((e) => 
        <p>{e.name}</p>)}
    </div>
  )

}

export default Taste;
