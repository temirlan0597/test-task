import Vue from 'vue'
import VueRouter from 'vue-router'

const loadComponent = path => () => import(`@/views/${path}.vue`);

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Main',
		component: loadComponent('Main')
	},
	{ path: '*', redirect: '/' }
	
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	const publicPages = [ '/' ];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = localStorage.getItem('user');
	
	if (authRequired && !loggedIn) {
		return next('/');
	}
	
	next();
});

export default router
