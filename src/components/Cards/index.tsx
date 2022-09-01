import React from 'react';
import s from './Cards.module.scss';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import {
	useGetProductsQuery,
	usePostProductMutation,
	useDeleteProductMutation,
} from '../../redux/api/productsApi';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../redux/store';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const [limit, setLimit] = React.useState('100');
	const { categoryId, sortType } = useAppSelector((state: RootState) => state.products);

	//Получение всех продуктов
	const {
		data = [],
		isLoading: getLoading,
		isError: getError,
	} = useGetProductsQuery({ limit, categoryId, sortType });

	//Добавление продукта
	const [postProduct, { isLoading: postLoading, isError: postError }] = usePostProductMutation();

	//Удаление продукта
	const [deleteProduct, {}] = useDeleteProductMutation();

	const newProduct = {
		id: 13,
		title: '13',
		price: 1,
		favorite: false,
		category: 2,
		imgUrl: 'https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg',
	};

	//Добавление продукта
	const handlePostProduct = async () => {
		await postProduct(newProduct).unwrap();
	};

	//Удаление продукта
	const handleDeleteProduct = async () => {
		await deleteProduct(15).unwrap();
	};

	return (
		<div className={s.wrapper}>
			<h1>Каталог</h1>
			<select value={limit} onChange={(e) => setLimit(e.target.value)}>
				<option value='100'>All products</option>
				<option value='3'>3 элемента</option>
				<option value='6'>6 элементов</option>
				<option value='9'>9 элементов</option>
			</select>
			<button onClick={handlePostProduct}>добавить</button>
			<button onClick={handleDeleteProduct}>удалить</button>
			<div className={s.cards}>
				{getError && <h1>Ошибка при подключении к серверу 😥</h1>}
				{getLoading
					? [1, 2, 3, 5, 6, 7].map((element) => <CardSkeleton key={element} />)
					: data.map((element: any) => <Card product={element} key={element.id} />)}
			</div>
		</div>
	);
};

export default Index;
