import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './NotFound.module.scss';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const navigate = useNavigate();
	const [time, setTime] = React.useState(10);

	setTimeout(() => {
		setTime(time - 1);
	}, 1000);

	time === 0 && navigate('/');

	return (
		<div className={s.wrapper}>
			<h1>404</h1>
			<h4>Not Found</h4>
			<h6>The resourece requested could not be found on this server!</h6>
			<h6>Rederect after: {time}</h6>
		</div>
	);
};

export default Index;
