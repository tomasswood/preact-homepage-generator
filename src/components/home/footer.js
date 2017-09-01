import { h, Component } from 'preact';

import FaIcon from '../icon';

class FooterItem extends Component {
	render( { label, link, icon_class } ) {
		return (
			<div class="footer-link">
				<a href={link} target="_blank" rel="noopener noreferrer"><FaIcon icon={icon_class} /> {label}</a>
			</div>
		);
	}
}

export default class Footer extends Component {
	render( props ) {
		return (
			<footer class="footer" style={{ backgroundColor: props.background_color || null }}>
				<div class="footer-wrapper">
					<div class="footer-wrapper-text">
						<h3>{props.title}</h3>
					</div>
					<div class="divider" />
					{props.list && props.list.map( item => <FooterItem {...item} /> )}
				</div>
			</footer>
		);
	}
}
