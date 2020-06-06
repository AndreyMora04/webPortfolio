//Importing layout.
import LayoutAdmin from '../layout/layoutAdmin';

//Then our admin pages.
import AdminHome from '../pages/Admin';
import AdminSingIn from '../pages/Admin/SingIn';

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
			}
		]
	}
];

//Exporting our routes array.

export default routes;
