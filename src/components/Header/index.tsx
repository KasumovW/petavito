import React from 'react';

import s from './Header.module.scss';

import best_logo from '../../assets/img/up.svg';
import basket from '../../assets/img/basket.svg';

type Props = {};

const Index: React.FC = (props: Props) => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
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
				<ul>
					<li>About me</li>
					<li>Contacts</li>
					<li>Somethings</li>
					<li>More somethings</li>
				</ul>
				<div className={s.basket}>
					<span>0 ₽</span>
					<div />
					<span>
						<img src={basket} alt='Иконка не прогрузилась' />0
					</span>
				</div>
			</div>
		</div>
	);
};

export default Index;