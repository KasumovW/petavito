import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import s from './Layout.module.scss';

type Props = {};

const MainLayout: React.FC<Props> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
			<h2>Footer</h2>
		</>
	);
};

export default MainLayout;
