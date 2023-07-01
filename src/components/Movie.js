import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, medium_cover_image, title, summary, genres }) {
	// Movie Component가 이 정보들을 parent component로부터 받아온다는 의미이다.
	//컴포넌트 분리
	return (
		<div>
			<img src={medium_cover_image} alt={title} />
			<h2>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>

			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	medium_cover_image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
