import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import ScrollTop from '../components/ScrollTop';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'>
			<ScrollTop></ScrollTop>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
