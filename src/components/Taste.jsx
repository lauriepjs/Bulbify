import { useState, useEffect } from "react";
import axios from "axios";
import Join from '../pages/Join';

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
	};
	let listOfurls = "";
	data.map((song) => {
		listOfurls += song.yID + ";";
	});

	console.log(listOfurls);
	if (data) {
		return (
			<div className='track'>
				<iframe
					width='90%'
					height='300vh'
					src={url}
					title='YouTube video player'
					frameBorder='2'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					playlist={listOfurls}
					allowFullScreen></iframe>
				<button className="next-button" onClick={handleChangeUrl}>Musique suivante</button>
				<div className='divblame'>
					<button className='blamebutton'>BLAME</button>
				</div>
			</div>
		);
	} else {
		return null;
	}
}

export default Taste;
