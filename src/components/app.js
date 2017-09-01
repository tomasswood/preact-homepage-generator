import { h, Component } from 'preact';

import Home from './home';
// import Home from 'async!./home';

export default class App extends Component {

	render() {
		return (
			<div id="app">
				<Home />
			</div>
		);
	}
}
