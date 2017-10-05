import { h } from 'preact';
import Profile from '../../src/components/home/profile';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

const list = profile.profile.bio;

test( 'check if Profile is rendering h3', () => {
	const actual = shallow( <Profile title="Test!" /> );
	expect( actual.find( 'h3' ).text() ).toBe( 'Test!' );
} );

test( 'check if Profile is modifying backgroundColor', () => {
	const actual = shallow( <Profile title="Test!" background_color="#5DC6DD" /> );
	expect( actual.find( '.profile' ).attr( 'style' ).backgroundColor ).toBe( '#5DC6DD' );
} );

test( 'check if Profile is not rendering Bios', () => {
	const actual = shallow( <Profile title="Test!" about={{title: "testing"}}/> );
	expect( actual.find( 'li' ).length ).toEqual( 0 );
} );

test( 'check if Profile is rendering Bios', () => {
	const actual = shallow( <Profile bio={list} title="Test!" /> );
	expect( actual.find( 'li' ).length ).toEqual( list.list.length * 2 );
} );
