import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeSearchValue } from '../../redux/slice/productsSlice';

import s from './Main.module.scss';

import search from '../../assets/img/search.svg';
import clear from '../../assets/img/clear.svg';

import Category from '../../components/Category';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';

type Props = {};

const Index: React.FC = (props: Props) => {
	const dispatch = useAppDispatch();
	const searchValue = useAppSelector((state) => state.products.searchValue);

	const handleChangeValue = (title: string = '') => {
		dispatch(changeSearchValue(title));
	};

	return (
		<div className={s.wrapper}>
			<div className={s.searchBlock}>
				<img className={s.search} src={search} alt='Иконка не прогрузилась' />
				<input
					value={searchValue}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeValue(e.target.value)}
					type='text'
				/>
				<img onClick={() => handleChangeValue()} src={clear} alt='Иконка не прогрузилась' />
			</div>
			<Category />
			<Cards />
			<Pagination />
		</div>
	);
};

export default Index;
