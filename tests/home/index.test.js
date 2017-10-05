import { h } from 'preact';
import Home from '../../src/components/home';
import { shallow, deep } from 'preact-render-spy';

test( 'check if Home is rendering', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'div' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Header', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'Header' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Profile', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'Profile' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Experience', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'Experience' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Skills', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'Skills' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Footer', () => {
	const actual = shallow( <Home /> );
	expect( actual.find( 'Footer' ) ).toBeTruthy();
} );
