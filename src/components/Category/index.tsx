import React from 'react';
import s from './Category.module.scss';

import arrow from '../../assets/img/arrow-down.svg';

type Props = {};

const Index: React.FC = (props: Props) => {
	const [categoryIndex, setCategoryIndex] = React.useState<number>(0);
	const [sortIndex, setSortIndex] = React.useState<number>(0);
	const category = [
		'Все',
		'Авто',
		'Техника',
		'Одежда',
		'Недвижимость',
		'Услуги',
		'Запчасти/Аксессуары',
	];
	const sort = ['Цена', 'Рейтинг', 'Алфавит'];

	return (
		<div className={s.category}>
			<ul>
				{category.map((element, i) => (
					<li
						onClick={() => setCategoryIndex(i)}
						className={categoryIndex === i ? s.active : ''}
						key={i}
					>
						{element}
					</li>
				))}
			</ul>
			<div>
				<img src={arrow} alt='Иконка не прогрузилась' />
				Сортировка по: <span>{sort[sortIndex]}</span>
				<div>
					{sort.map((element, i) => (
						<p
							onClick={() => setSortIndex(i)}
							className={sortIndex === i ? s.active : ''}
							key={i}
						>
							{element}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Index;
