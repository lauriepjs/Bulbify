import { useState, useEffect } from "react";
import axios from "axios";

function Taste() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://magical-it-works.jsrover.wilders.dev/https://tastedive.com/api/similar?q=Adele&info=1`)
      .then((res) => console.log(res.data.Similar.Results));
  }, []);
  return (
    <>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hLQl3WQQoQ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe>
    </>
  );

}

export default Taste;
