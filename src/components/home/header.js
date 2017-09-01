import { h, Component } from 'preact';

const determineImage = ( backgroundImage, backgroundImages ) => {
	const viewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		ratio = window.devicePixelRatio || 1;

	let headerImage = backgroundImage;
	if ( backgroundImages ) {
		let imageSizes = backgroundImages.filter( image => ( viewport * ratio ) < image.width );
		if ( imageSizes.length ) {
			const lastImage = imageSizes.pop();
			if ( lastImage ) {
				headerImage = lastImage.filename;
			}
		}

	}

	if ( headerImage ) {
		return `url(../../assets/${ headerImage })`;
	}

	return;
};

export default class Header extends Component {
	constructor( props ) {
		super();

		this.state.background_image = determineImage( props.background_image, props.background_images );
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
