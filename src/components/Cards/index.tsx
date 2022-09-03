import React from 'react';
import s from './Cards.module.scss';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../redux/store';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const { categoryId, sortType, searchValue, page } = useAppSelector(
		(state: RootState) => state.products
	);

	//Получение всех продуктов
	const {
		data = [],
		isLoading: getLoading,
		isError: getError,
	} = useGetProductsQuery({ categoryId, sortType, searchValue, page });

	// //Добавление продукта
	// const [postProduct, { isLoading: postLoading, isError: postError }] = usePostProductMutation();

	// //Удаление продукта
	// const [deleteProduct, {}] = useDeleteProductMutation();

	// const newProduct = {
	// 	id: 13,
	// 	title: '13',
	// 	price: 1,
	// 	favorite: false,
	// 	category: 2,
	// 	imgUrl: 'https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg',
	// };

	// //Добавление продукта
	// const handlePostProduct = async () => {
	// 	await postProduct(newProduct).unwrap();
	// };

	// //Удаление продукта
	// const handleDeleteProduct = async () => {
	// 	await deleteProduct(15).unwrap();
	// };

	const skeletons = [...new Array(6)].map((element) => <CardSkeleton key={element} />);
	const cards = data
		.filter((element: any) =>
			element.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false
		)
		.map((element: any) => <Card product={element} key={element.id} />);

	return (
		<div className={s.wrapper}>
			<h1>Каталог</h1>
			<button
			// onClick={handlePostProduct}
			>
				добавить
			</button>
			<button
			// onClick={handleDeleteProduct}
			>
				удалить
			</button>
			<div className={s.cards}>
				{getError && <h1>Ошибка при подключении к серверу 😥</h1>}
				{getLoading ? skeletons : cards}
			</div>
		</div>
	);
};

export default Index;
