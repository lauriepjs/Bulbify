import { useState, useEffect } from "react";
import axios from "axios";

function Taste() {
	const [data, setData] = useState([]);
	const artist = "Adele";

	useEffect(() => {
		axios
			.get(
				`https://magical-it-works.jsrover.wilders.dev/https://tastedive.com/api/similar?q=${artist}&info=1`
			)
			.then((res) => setData(res.data.Similar.Results));
	}, []);

  const [url, setUrl] = useState("https://www.youtube-nocookie.com/embed/hTWKbfoikeg");

  const handleChangeUrl = () => {
    const nbr = Math.floor(Math.random() * (data.length - 1) + 1);
    setUrl(data[nbr].yUrl);
  }
  let listOfurls = "";
  data.map(song => {
    listOfurls += song.yID + ';';
  })
  
  console.log(listOfurls);
	if (data) {
		return (
			<>
				<iframe
					width='100%'
					height='300vh'
					src={url}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          playlist={listOfurls}
					allowFullScreen></iframe>
				<button onClick={handleChangeUrl}>Musique suivante</button>
			</>
		);
	} else {
    return null;
  }
}

export default Taste;
