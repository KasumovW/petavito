import React from 'react';
import s from './Card.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addCart } from '../../redux/slice/cartSlice';

export interface IProduct {
	id: number;
	title: string;
	price: number;
	favorite: boolean;
	category: number;
	rating: number;
	imgUrl: string;
}

type Props = {
	product: IProduct;
};

const Index: React.FC<Props> = ({ product }) => {
	const dispatch = useAppDispatch();
	const cartItem = useAppSelector((state) =>
		state.cartItems.items.find((element: any) => element.id === product.id)
	);

	const addCount = cartItem ? cartItem.count : 0;

	return (
		<div className={s.wrapper}>
			<a href='#'>
				<img className={s.mainImage} src={product.imgUrl} alt='Картинка не прогрузилась' />
			</a>
			<p>{product.title}</p>
			<p>Рейтинг: {product.rating}/10</p>
			<div>
				<p>Цена: {product.price} ₽</p>
				<button onClick={() => dispatch(addCart(product))}>
					Добавить
					{addCount > 0 && <div>{addCount}</div>}
				</button>
			</div>
		</div>
	);
};

export default Index;
