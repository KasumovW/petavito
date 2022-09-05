import React from 'react';

import Header from './components/Header';
import Main from './pages/Main';

import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

const App: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</>
	);
};

export default App;
