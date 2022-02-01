import { motion } from 'framer-motion';
import styled from 'styled-components';

//Styled Component
export const About = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	@media (max-width: 1300px) {
		display: block;
		padding: 2rem 2rem;
		text-align: center;
	}
`;

export const Description = styled.div`
	z-index: 3;
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: bold;
	}
	@media (max-width: 1300px) {
		padding: 0;
		button {
			margin: 2rem 0rem 5rem 0rem;
		}
	}
`;

export const Image = styled.div`
	z-index: -1;
	flex: 1;
	overflow: hidden;
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;

export const Hide = styled.div`
	overflow: hidden;
`;
