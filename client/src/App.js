import React from 'react';
import './App.scss';
import Admin from './pages/Admin';
import SingIn from './pages/Admin/SingIn';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
	return (
		<h2>
			<Admin />
			<SingIn />
			<Home />
			<Contact />
		</h2>
	);
}
export default App;
