import React from 'react';

import s from './Header.module.scss';

import best_logo from '../../assets/img/up.svg';
import basket from '../../assets/img/basket.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

type Props = {};

const Index: React.FC = (props: Props) => {
	const { items, totalPrice } = useAppSelector((state) => state.cartItems);

	const totalCount = items.reduce(
		(sum: number, element: { count: number }) => sum + element.count,
		0
	);

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<Link to='/'>
					<div className={s.logo}>
						<img
							onClick={() => window.scrollTo(0, 0)}
							src={best_logo}
							alt='Иконка не прогрузилась'
						/>
						<p>
							Best logo <br /> in the world
						</p>
					</div>
				</Link>
				<ul>
					<li>About me</li>
					<li>Contacts</li>
					<li>Somethings</li>
					<li>More somethings</li>
				</ul>
				<Link to='/cart'>
					<div className={s.basket}>
						<span>{totalPrice} ₽</span>
						<div />
						<span>
							<img src={basket} alt='Иконка не прогрузилась' /> {totalCount}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Index;
