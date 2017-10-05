import { h } from 'preact';
import Footer from '../../src/components/home/footer';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

const list = profile.contact.list;

test( 'check if Footer is rendering h3', () => {
	const actual = shallow( <Footer title="Test!" /> );
	expect( actual.find( 'h3' ).text() ).toBe( 'Test!' );
} );

test( 'check if Footer is modifying backgroundColor', () => {
	const actual = shallow( <Footer title="Test!" background_color="#5DC6DD" /> );
	expect( actual.find( '.footer' ).attr( 'style' ).backgroundColor ).toBe( '#5DC6DD' );
} );

test( 'check if Footer is not rendering FooterItems', () => {
	const actual = shallow( <Footer title="Test!" /> );
	expect( actual.find( 'FooterItem' ).length ).toEqual( 0 );
} );

test( 'check if Footer is rendering FooterItems', () => {
	const actual = shallow( <Footer list={list} title="Test!" /> );
	expect( actual.find( 'FooterItem' ).length ).toEqual( 2 );
} );

test( 'check if Footer is rendering FooterItems with correct icon', () => {
	const actual = shallow( <Footer list={list} title="Test!" /> );
	expect( actual.find( 'FooterItem' ).at( 0 )
		.find( `.fa-${list[ 0 ].icon_class}` ) ).toBeTruthy();
} );

test( 'check if Footer is rendering FooterItems with correct text', () => {
	const actual = deep( <Footer list={list} title="Test!" />, { depth: 2 } );
	expect( actual.find( 'FooterItem' ).at( 0 ).text() ).toBe( ` ${list[ 0 ].label}` );
} );
