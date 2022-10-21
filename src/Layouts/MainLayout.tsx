import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

type Props = {};

const MainLayout: React.FC<Props> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default MainLayout;
