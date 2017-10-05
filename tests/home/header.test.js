import { h } from 'preact';
import Header from '../../src/components/home/header';
import { shallow, deep } from 'preact-render-spy';

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
