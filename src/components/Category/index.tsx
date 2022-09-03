import React from 'react';
import s from './Category.module.scss';

import arrow from '../../assets/img/arrow-down.svg';

import { changeCategoryId, changeSortType } from '../../redux/slice/productsSlice';
import { RootState } from '../../redux/store';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

type Props = {};

const Index: React.FC = (props: Props) => {
	const dispatch = useAppDispatch();
	const { categoryId, sortType } = useAppSelector((state: RootState) => state.products);

	const category = [
		'Все',
		'Авто',
		'Техника',
		'Одежда',
		'Недвижимость',
		'Услуги',
		'Запчасти/Аксессуары',
	];
	const sort = [
		{ name: 'Цена', sortProperty: 'price', id: 0 },
		{ name: 'Рейтинг', sortProperty: 'rating', id: 1 },
		{ name: 'Алфавит', sortProperty: 'title', id: 2 },
	];

	return (
		<div className={s.category}>
			<ul>
				{category.map((element, i) => (
					<li
						onClick={() => dispatch(changeCategoryId(i))}
						className={categoryId === i ? s.active : ''}
						key={i}
					>
						{element}
					</li>
				))}
			</ul>
			<div>
				<img src={arrow} alt='Иконка не прогрузилась' />
				Сортировка по: <span>{sort[sortType.id].name}</span>
				<div>
					{sort.map((element, i) => (
						<p
							onClick={() => dispatch(changeSortType(element))}
							className={sortType.id === i ? s.active : ''}
							key={element.id}
						>
							{element.name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Index;
