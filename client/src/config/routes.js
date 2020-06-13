//Importing layout.
import LayoutAdmin from '../layout/layoutAdmin';

//Then our admin pages.
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SingIn';

//Importing our main route.
import LayoutBasic from '../layout/layoutBasic';

//Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';

//Here we can add new routes to our web application.
const routes = [
	{
		path: '/admin',
		component: LayoutAdmin,
		exact: false,
		routes: [
			{
				path: '/admin',
				component: AdminHome,
				exact: true
			},
			{
				path: '/admin/login',
				component: AdminSingIn,
				exact: true
			},
			{
				component: Error404
			}
		]
	},

	{
		path: '/',
		component: LayoutBasic,
		path: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true
			},
			{
				path: '/contact',
				component: Contact,
				exact: true
			},
			{
				//We always have to put the default error page, it has to be the last one of the list.
				component: Error404
			}
		]
	}
];

//Exporting our routes array.

export default routes;
