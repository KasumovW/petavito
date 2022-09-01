import React from 'react';
import s from './Card.module.scss';

export interface IProduct {
	id: number;
	title: string;
	price: number;
	favorite: boolean;
	category: number;
	imgUrl: string;
}

type Props = {
	product: IProduct;
};

const Index: React.FC<Props> = ({ product }) => {
	const [counter, setCounter] = React.useState(0);

	return (
		<div className={s.wrapper}>
			<a href='#'>
				<img
					className={s.mainImage}
					src={product.imgUrl}
					alt='Картинка не прогрузилась'
				/>
			</a>
			<p>{product.title}</p>
			<p>Рейтинг: {product.category}/10</p>
			<div>
				<p>Цена: {product.price} ₽</p>
				<button onClick={() => setCounter(counter + 1)}>
					Добавить <div>{counter}</div>
				</button>
			</div>
		</div>
	);
};

export default Index;
