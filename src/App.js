//Import separate pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//Import global styling component and navigation bar.
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';

//Router
import { Switch, Route, useLocation } from 'react-router-dom';

//Animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<div className='className'>
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.key}>
					<Route path='/' exact>
						<AboutUs></AboutUs>
					</Route>
					<Route path='/work' exact>
						<OurWork></OurWork>
					</Route>
					<Route path='/work/:id'>
						<MovieDetail></MovieDetail>
					</Route>
					<Route path='/contact'>
						<ContactUs></ContactUs>
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
};
export default App;
