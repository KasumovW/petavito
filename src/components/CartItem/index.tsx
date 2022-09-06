import React from 'react';
import s from './CartItem.module.scss';

import x from '../../assets/img/x.svg';
import { useAppDispatch } from '../../hooks/redux';
import { addCart, minusCart, removeCart } from '../../redux/slice/cartSlice';

type Props = {
	element: any;
};

const Index: React.FC<Props> = ({ element }) => {
	const dispatch = useAppDispatch();

	return (
		<div className={s.item}>
			<img src={element.imgUrl} alt='Картинка не прогрузилась' />
			<p>{element.title}</p>
			<p>{element.price} ₽</p>
			<div className={s.count}>
				<button onClick={() => element.count > 0 && dispatch(minusCart(element.id))}>-</button>
				<p>{element.count}</p>
				<button onClick={() => dispatch(addCart(element))}>+</button>
			</div>
			<p>
				{element.price * element.count} ₽
				<img onClick={() => dispatch(removeCart(element))} src={x} alt='Картинка не прогрузилась' />
			</p>
		</div>
	);
};

export default Index;
