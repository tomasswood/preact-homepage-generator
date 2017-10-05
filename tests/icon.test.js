import { h } from 'preact';
import FaIcon from '../src/components/icon';
import { shallow, deep } from 'preact-render-spy';

test( 'check if Icon is rendering', () => {
	const actual = shallow( <FaIcon icon="star" /> );
	expect( actual.find( '.fa-star' ) ).toBeTruthy();
} );
