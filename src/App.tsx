import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import menu1 from './routes/menu1';
import menu2 from './routes/menu2';
import menu3 from './routes/menu3';
import menu4 from './routes/menu4';
import Navigation from './components/navigation';




function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route component={Detail} path='/movie/:id' />
				<Route component={Home} path='/' />
				<Route component={menu1} path='/menu1' />
				<Route component={menu2} path='/menu2'/>
				<Route component={menu3} path='/menu3'/>
				<Route component={menu4} path='/menu4'/>
			</Switch>
		</Router>
	);
}

export default App;
