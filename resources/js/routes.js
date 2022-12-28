import index from './components/index';
import online from './components/online';

export default{
	mode: 'history',

	routes: [
		{
			path: '/',
			component: index
		},
		{
			path: '/online',
			component: online
		}
	]
}