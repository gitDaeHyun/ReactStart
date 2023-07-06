import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import {Iprops} from '../components/Movie'
function Home() {
	const [loading, setLoading] = useState<boolean>(true);
	const [movies, setMovies] = useState<Iprops[]>([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	
	return (
		<div>
			{loading ? (
				<h1>Loading..</h1>
			) : (
				<div>
					{movies.map((movie : Iprops) => (
						<Movie
							key={movie.id}
							id={movie.id}
							medium_cover_image={movie.medium_cover_image}
							title={movie.title}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
