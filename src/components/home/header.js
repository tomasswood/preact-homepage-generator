import { h, Component } from 'preact';

const requireAll = requireContext => requireContext.keys().map( requireContext );

const determineImage = ( backgroundImage, backgroundImages ) => {
	const viewport = ( typeof window !== 'undefined' ) ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : '1920',
		ratio = ( typeof window !== 'undefined' ) ? window.devicePixelRatio || 1 : 1;

	let headerImage = require( `../../assets/header/${backgroundImage}` );
	if ( backgroundImages ) {
		const imageModules = requireAll( require.context( '../../assets/header', false ) );
		let imagesSized = backgroundImages.reduce( ( arr, image, i ) => {
			if ( ( viewport * ratio ) < image.width ) {
				image.filename = imageModules[ i ];
				arr.push( image );
			}

			return arr;
		}, [] );
		if ( imagesSized.length ) {
			const lastImage = imagesSized.pop();
			if ( lastImage && lastImage.filename ) {
				headerImage = lastImage.filename;
			}
		}
	}

	if ( headerImage ) {
		return `url(${ headerImage })`;
	}

	return;
};

export default class Header extends Component {
	constructor( props ) {
		super();

		this.state.background_image = ( props.background_image || props.background_images ) ? determineImage( props.background_image, props.background_images ) : null;
	}

	render( props, { background_image } ) {
		return (
			<header class="header" style={{ backgroundColor: props.background_color || null, backgroundImage: background_image }}>
				<div class="header-wrapper">
					<div class="header-wrapper-text">
						<h1 class="title" itemprop="name">{props.title}</h1>
						<h2 class="subtitle" itemprop="jobTitle">{props.subtitle}</h2>
					</div>
				</div>
			</header>
		);
	}
}
