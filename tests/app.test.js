import { h } from 'preact';
import App from '../src/components/app';
import { shallow, deep } from 'preact-render-spy';

test( 'check if App is rendering', () => {
	const actual = shallow( <App /> );
	expect( actual.find( 'div' ) ).toBeTruthy();
} );

test( 'check if App is rendering Home', () => {
	const actual = shallow( <App /> );
	expect( actual.find( 'Home' ) ).toBeTruthy();
} );
