import { h, Component } from 'preact';

export const formatTime = ( { from, to } ) => [ from, to ].filter( val => val ).join( ' - ' );

class ResumeItem extends Component {
	render( { location, time, title, description } ) {
		const timePeriod = formatTime( { ...time } );

		return (
			<div class="resume-item">
				<div class="qualification">
					<strong>{location}</strong>
					<p class="time-period">{timePeriod}</p>
				</div>
				<div class="summary">
					<strong>{title}</strong>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

class ExperienceItem extends Component {
	render( { title, list } ) {
		return (
			<div class="resume">
				<h5>{title}</h5>
				{list && list.map( item => <ResumeItem {...item} /> )}
			</div>
		);
	}
}

export default class Experience extends Component {
	render( props ) {
		return (
			<section class="experience section" style={{ backgroundColor: props.background_color || null }}>
				<div class="main-wrapper">
					<div class="main-wrapper-text">
						<h3>{props.title}</h3>
					</div>
					{props.list && props.list.map(item => (
						<div class="experience-item">
							<div class="divider" />
							<ExperienceItem {...item} />
						</div>
					))}
				</div>
			</section>
		);
	}
}
