import React from 'react';
import s from './Cards.module.scss';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';
import {
	useGetProductsQuery,
	usePostProductMutation,
	useDeleteProductMutation,
} from '../../redux/api/productsApi';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const [count, setCount] = React.useState('100');

	//Получение всех продуктов
	const {
		data = [],
		isLoading: getLoading,
		isError: getError,
	} = useGetProductsQuery(count);

	//Добавление продукта
	const [postProduct, { isLoading: postLoading, isError: postError }] =
		usePostProductMutation();

	//Удаление продукта
	const [deleteProduct, {}] = useDeleteProductMutation();

	const newProduct = {
		id: 13,
		title: '13',
		price: 1,
		favorite: false,
		category: 2,
		imgUrl:
			'https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg',
	};

	const handlePostProduct = async () => {
		await postProduct(newProduct).unwrap();
	};

	const handleDeleteProduct = async () => {
		await deleteProduct(15).unwrap();
	};

	return (
		<div className={s.wrapper}>
			<h1>Каталог</h1>
			<select
				style={{ marginBottom: '100px', width: '100px' }}
				value={count}
				onChange={(e) => setCount(e.target.value)}
			>
				<option value='100'>All</option>
				<option value='3'>3</option>
				<option value='6'>6</option>
				<option value='9'>9</option>
			</select>
			<button onClick={handlePostProduct}>добавить</button>
			<button onClick={handleDeleteProduct}>удалить</button>
			<div className={s.cards}>
				{getError && <h1>Ошибка при подключении к серверу 😥</h1>}
				{getLoading
					? [1, 2, 3, 5, 6, 7].map((element) => <CardSkeleton key={element} />)
					: data.map((element: any) => (
							<Card product={element} key={element.id} />
					  ))}
			</div>
		</div>
	);
};

export default Index;
