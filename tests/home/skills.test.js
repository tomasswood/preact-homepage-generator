import { h } from 'preact';
import Skills from '../../src/components/home/skills';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

const list = profile.skills.list;

test( 'check if Skills is rendering h3', () => {
	const actual = shallow( <Skills title="Test!" /> );
	expect( actual.find( 'h3' ).text() ).toBe( 'Test!' );
} );

test( 'check if Skills is modifying backgroundColor', () => {
	const actual = shallow( <Skills title="Test!" background_color="#5DC6DD" /> );
	expect( actual.find( '.skills' ).attr( 'style' ).backgroundColor ).toBe( '#5DC6DD' );
} );

test( 'check if Skills is not rendering SkillItems', () => {
	const actual = shallow( <Skills title="Test!" /> );
	expect( actual.find( 'SkillItem' ).length ).toEqual( 0 );
} );

test( 'check if Skills is rendering SkillItems', () => {
	const actual = shallow( <Skills list={list} title="Test!" /> );
	expect( actual.find( 'SkillItem' ).length ).toEqual( 4 );
} );

test( 'check if Skills is rendering SkillItems with correct StarFull icons', () => {
	const actual = deep( <Skills list={list} title="Test!" />, { depth: 3 } );
	expect( actual.find( 'SkillItem' ).at( 3 )
		.find( '.fa-star' ).length ).toEqual( 4 );
} );

test( 'check if Skills is rendering SkillItems with correct StarEmpty icons', () => {
	const actual = deep( <Skills list={list} title="Test!" />, { depth: 3 } );
	expect( actual.find( 'SkillItem' ).at( 3 )
		.find( '.fa-star-o' ).length ).toEqual( 1 );
} );

test( 'check if Skills is rendering SkillItems with correct text', () => {
	const actual = deep( <Skills list={list} title="Test!" />, { depth: 2 } );
	expect( actual.find( 'SkillItem' ).at( 3 )
		.find( '.skill-name' ).text() ).toBe( list[ 3 ].label );
} );
