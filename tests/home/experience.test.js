import { h } from 'preact';
import Experience, { formatTime } from '../../src/components/home/experience';
import { shallow, deep } from 'preact-render-spy';

import profile from '../../src/profile.json';

const list = profile.experience.list;

test( 'check if Experience is rendering h3', () => {
	const actual = shallow( <Experience title="Test!" /> );
	expect( actual.find( 'h3' ).text() ).toBe( 'Test!' );
} );

test( 'check if Experience is modifying backgroundColor', () => {
	const actual = shallow( <Experience title="Test!" background_color="#5DC6DD" /> );
	expect( actual.find( '.experience' ).attr( 'style' ).backgroundColor ).toBe( '#5DC6DD' );
} );

test( 'check if Experience is not rendering ExperienceItems', () => {
	const actual = shallow( <Experience title="Test!" /> );
	expect( actual.find( 'ExperienceItem' ).length ).toEqual( 0 );
} );

test( 'check if Experience is rendering ExperienceItems', () => {
	const actual = shallow( <Experience list={list} title="Test!" /> );
	expect( actual.find( 'ExperienceItem' ).length ).toEqual( 2 );
} );

test( 'check if Experience is rendering ExperienceItems with correct title', () => {
	const actual = deep( <Experience list={list} title="Test!" />, { depth: 2 } );
	expect( actual.find( 'ExperienceItem' ).at( 0 )
		.find( 'h5' ).text()
	).toBe( list[ 0 ].title );
} );

test( 'check if Experience is not rendering ExperienceItems with ResumeItems', () => {
	const experiences = [ ...list ];
	delete experiences[ 0 ].list;

	const actual = shallow( <Experience list={experiences} title="Test!" /> );
	expect( actual.find( 'ExperienceItem' ).at( 0 )
		.find( 'ResumeItem' ).length ).toEqual( 0 );
} );

test( 'check if Experience is rendering ExperienceItems with correct number of ResumeItems', () => {
	const actual = deep( <Experience list={list} title="Test!" />, { depth: 2 } );
	expect( actual.find( 'ExperienceItem' ).at( 1 )
		.find( 'ResumeItem' ).length ).toEqual( 2 );
} );

test( 'check if ResumeItem displays From and To correctly', () => {
	const actual = deep( <Experience list={list} title="Test!" />, { depth: 3 } );
	expect( actual.find( 'ExperienceItem' ).at( 1 )
		.find( 'ResumeItem' ).at( 0 )
		.find( '.time-period' ).text()
	).toBe( `${list[ 1 ].list[ 0 ].time.from} - ${list[ 1 ].list[ 0 ].time.to}` );
} );

test( 'check if formatTime formats From correctly', () => {
	expect( formatTime( { ...list[ 1 ].list[ 1 ].time } ) ).toBe( list[ 1 ].list[ 1 ].time.from );
} );
