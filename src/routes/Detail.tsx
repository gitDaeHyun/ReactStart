import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Detail() {
	
	const { id } = useParams<{id : string}>();
	const [moiveData, setMovieData] = useState<any | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const getMovie = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovieData(json.data.movie.title)
		setLoading(false)
		

	};
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			loading ? <div>Loading..</div> : <h1>{moiveData}</h1>;
			
		</div>
	);
}

export default Detail;
