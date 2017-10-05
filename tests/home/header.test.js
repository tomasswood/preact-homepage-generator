import { h } from 'preact';
import Header, { chooseBackgroundImages, viewSize } from '../../src/components/home/header';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

test( 'check if Header is rendering h1', () => {
	const actual = shallow( <Header title="Test!" subtitle="This is a test." /> );
	expect( actual.find( 'h1' ).text() ).toBe( 'Test!' );
} );

test( 'check if Header is modifying backgroundColor', () => {
	const actual = shallow( <Header title="Test!" background_color="#5DC6DD" /> );
	expect( actual.find( '.header' ).attr( 'style' ).backgroundColor ).toBe( '#5DC6DD' );
} );

test( 'check if Header is modifying backgroundImage', () => {
	const actual = shallow( <Header title="Test!" background_image="newcastle.jpg" /> );
	expect( actual.find( '.header' ).attr( 'style' ).backgroundImage ).toBe( 'url(test-file-stub)' );
} );

const backgroundImages = profile.header.background_images,
	imageModules = backgroundImages.reduce( ( arr, image ) => {
		arr.push( image.filename );
		return arr;
	}, [] );

test( 'check if we can generate a backgroundImage from a list', () => {
	expect( chooseBackgroundImages( backgroundImages, imageModules, { viewport: 1600, ratio: 1 } ) ).toBe( 'newcastle.jpg' );
} );

test( 'check if we can generate a backgroundImage from a list when the browser screen is too large', () => {
	expect( chooseBackgroundImages( backgroundImages, imageModules, { viewport: 3000, ratio: 2 } ) ).toBe( 'newcastle-xlarge.jpg' );
} );

test( 'check if we can generate a viewport and ratio sizes', () => {
	expect( viewSize().ratio ).toEqual( 1 );
} );
