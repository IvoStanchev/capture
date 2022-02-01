import styled from 'styled-components';
import ScrollTop from '../components/ScrollTop';

import { useHistory } from 'react-router';
import { MovieState } from '../movieState';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

//* COMPONENTS
const MovieDetail = () => {
	//Set the history and get the URL for each visited page
	const history = useHistory();
	const url = history.location.pathname;

	//Set state to all movies that we have set in the movie object, then prepare the second state for each individual movie that we get.
	const [movies, setMovieState] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	//UseEffect
	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
	}, [movies, url]);

	return (
		<>
			{/* ONLY render the content if the movie is loaded. */}
			{movie && (
				<Details
					variants={pageAnimation}
					initial='hidden'
					animate='show'
					exit='exit'>
					<ScrollTop></ScrollTop>
					<Headline>
						<h2>{movie.title}</h2>
						<img src={movie.mainImg} alt='' />
					</Headline>
					<Awards>
						{movie.awards.map((x) => (
							<Award
								title={x.title}
								description={x.description}
								key={x.title}
							/>
						))}
					</Awards>
					<ImageDisplay>
						<img src={movie.secondaryImg} alt='' />
					</ImageDisplay>
				</Details>
			)}
		</>
	);
};

const Award = ({ title, description }) => {
	return (
		<AwardStyle>
			<h3>{title}</h3>
			<div className='line'></div>
			<p>{description}</p>
		</AwardStyle>
	);
};

//*STYLES

const ImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

const Details = styled(motion.div)`
	color: white;
`;

const Headline = styled.div`
	min-height: 90vh;
	position: relative;
	padding-top: 20vh;
	h2 {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const Awards = styled.div`
	min-height: 80vh;
	display: flex;
	margin: 5rem 10rem;
	align-items: center;
	justify-content: space-around;
	@media (max-width: 5300px) {
		display: block;
		margin: 2rem 2rem;
	}
`;

const AwardStyle = styled.div`
	padding: 5rem;
	h3 {
		font-size: 2rem;
	}
	.line {
		width: 100%;
		background: #23d997;
		height: 0.5rem;
		margin: 1rem 0rem;
	}
	p {
		padding: 2rem 0rem;
	}
`;

export default MovieDetail;
