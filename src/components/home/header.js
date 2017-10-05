import { h, Component } from 'preact';

const requireAll = requireContext => requireContext.keys().map( requireContext );

export const viewSize = () => {
	const viewport = ( typeof window !== 'undefined' ) ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : 1920,
		ratio = ( typeof window !== 'undefined' ) ? window.devicePixelRatio || 1 : 1;

	return { viewport: viewport, ratio: ratio };
};

export const chooseBackgroundImages = ( backgroundImages, imageModules, { viewport = 1920, ratio = 1 } ) => {
	let headerImage,
		imagesSized = backgroundImages.reduce( ( arr, image, i ) => {
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
	} else {
		headerImage = imageModules[ 0 ];
	}

	return headerImage;
};

const determineImage = ( backgroundImage, backgroundImages ) => {
	let headerImage;
	if ( backgroundImages ) {
		const imageModules = requireAll( require.context( '../../assets/header', false ) );
		headerImage = chooseBackgroundImages( backgroundImages, imageModules, { ...viewSize() } );
	} else {
		headerImage = require( `../../assets/header/${backgroundImage}` );
	}

	if ( headerImage ) {
		return `url(${ headerImage })`;
	}
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
