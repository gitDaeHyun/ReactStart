import { Link } from 'react-router-dom';

export interface Iprops {
	id : number;
	medium_cover_image : string;
	title : string;
	summary : string;
	genres : string[];
}

function Movie({ id, medium_cover_image, title, summary, genres } : Iprops) {
	// Movie Component가 이 정보들을 parent component로부터 받아온다는 의미이다.
	//컴포넌트 분리
	return (
		<div>
			<img src={medium_cover_image} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>

			<p>{summary.length > 30 ? `${summary.substring(0,123)}` : summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}



export default Movie;
