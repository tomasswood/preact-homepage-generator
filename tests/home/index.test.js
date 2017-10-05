import { h } from 'preact';
import Home from '../../src/components/home';
import { shallow, deep } from 'preact-render-spy';

const actual = shallow( <Home /> );

test( 'check if Home is rendering', () => {
	expect( actual.find( 'div' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Header', () => {
	expect( actual.find( 'Header' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Profile', () => {
	expect( actual.find( 'Profile' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Experience', () => {
	expect( actual.find( 'Experience' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Skills', () => {
	expect( actual.find( 'Skills' ) ).toBeTruthy();
} );

test( 'check if Home is rendering Footer', () => {
	expect( actual.find( 'Footer' ) ).toBeTruthy();
} );
