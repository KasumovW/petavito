import React from 'react';
import s from './NotFound.module.scss';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	return (
		<div className={s.wrapper}>
			<h1>404</h1>
			<h4>Not Found</h4>
			<h6>The resourece requested could not be found on this server!</h6>
		</div>
	);
};

export default Index;
