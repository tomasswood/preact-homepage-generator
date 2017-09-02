import { h, Component } from 'preact';
import fetch from 'unfetch';

import Header from './header';
import Profile from './profile';
import Experience from './experience';
import Skills from './skills';
import Footer from './footer';

export default class Home extends Component {
	state = {
		profile: require('../../profile.json')
	};

	componentDidMount() {
		fetch( '/profile.json' ).then( response => response.json() ).then( profile => this.setState( { profile } ) );
	}

	render( {}, { profile } ) {
		return (
			<div itemscope itemprop="Person" itemtype="https://schema.org/Person">
				{profile.header && <Header {...profile.header} />}
				{profile.profile && <Profile {...profile.profile} />}
				{profile.experience && <Experience {...profile.experience} />}
				{profile.skills && <Skills {...profile.skills} />}
				{profile.contact && <Footer {...profile.contact} />}
			</div>
		);
	}
}
