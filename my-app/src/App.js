import logo from './logo.svg'; // declarative style
import './App.css'; //declarative style
import { createElement } from 'react';

export const App = () => {
	//start imperative style....
	function getYear() {
		return String(new Date().getFullYear());
	}
	const year = getYear();
	return createElement(
		'div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			createElement('img', { className: 'App-logo', src: logo, alt: 'logo' }),
			createElement(
				'p',
				null,
				'Edit ',
				createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			createElement('p', null, createElement('span', { id: 'year' }, year)),
		),
	);
}; //finish imperative style...
