
let views = {};

const files = require.context('./views/', false, /\.vue$/i, 'lazy');
files.keys().map(key => views[key.split('/').pop().split('.')[0]] = () => import(`./views/${key.split('/').pop().split('.')[0]}.vue`));

const routes = [
	{ path: '/', name: 'home', component: views.Index, meta: { name: 'Home' } },
	{ path: "*", component: views.PageNotFound },
];
export default routes;