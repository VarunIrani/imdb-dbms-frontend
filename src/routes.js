import React from 'react';
import Home from './views/Home';
import Movie from './views/Movie';
import SearchPage from './components/movie/SearchPage';

export const ROUTES = [
	{
		name: 'Home',
		path: '/',
		component: <Home />
	},
	{
		name: 'Add a Movie',
		path: '/',
		component: null
	},
	{
		name: 'Movie',
		path: '/movie',
		component: <Movie />
	},
	{
		name: 'Search',
		path: '/search',
		component: <SearchPage movies={null} />
	}
];
