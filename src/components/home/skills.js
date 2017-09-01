import { h, Component } from 'preact';

import FaIcon from '../icon';

class SkillItem extends Component {
	render( { label, value } ) {
		const starsFull = Array( value ).fill().map( val => <FaIcon icon="star" /> ),
			starsEmpty = Array( 5 - value ).fill().map( val => <FaIcon icon="star-o" /> );

		return (
			<div class="skillset-item">
				<div class="skill-values">
					<div class="skill-name">
						<p>{label}</p>
					</div>
					<div class="skill-score">
						{starsFull}
						{starsEmpty}
					</div>
				</div>
			</div>
		);
	}
}

export default class Skills extends Component {
	render( props ) {
		return (
			<section class="skills section" style={{ backgroundColor: props.background_color || null }}>
				<div class="main-wrapper">
					<div class="main-wrapper-text">
						<h3>{props.title}</h3>
					</div>
					<div class="divider" />
					{props.list && props.list.map( item => <SkillItem {...item} /> )}
				</div>
			</section>
		);
	}
}
