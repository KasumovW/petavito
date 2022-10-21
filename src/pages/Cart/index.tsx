import React from 'react';
import s from './Cart.module.scss';

import CartItem from '../../components/CartItem';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearCart } from '../../redux/slice/cartSlice';
import { Link } from 'react-router-dom';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const dispatch = useAppDispatch();
	const items = useAppSelector((state) => state.cartItems.items);
	const totalPrice = useAppSelector((state) => state.cartItems.totalPrice);
	const totalCount = items.reduce(
		(sum: number, element: { count: number }) => sum + element.count,
		0
	);

	return (
		<div className={s.wrapper}>
			<div className={s.clear}>
				<h1>Your Cart 4 items</h1>
				<p onClick={() => dispatch(clearCart())}>Очистить корзину</p>
			</div>
			<div className={s.items}>
				{items.length > 0 ? (
					items.map((element: any) => <CartItem element={element} />)
				) : (
					<div className={s.want}>
						<h3>В карзине нечего нет, хотите добавить?</h3>
						<p>Вероятней всего, вы не добавили нечего в карзину.</p>
						<p>Для того, чтобы добавить товар в карзину, перейдите на главную страницу.</p>
						<Link to='/'>
							<button>Вернутся назад</button>
						</Link>
					</div>
				)}
			</div>
			<div className={s.total}>
				<p>Всего товаров: {totalCount} шт.</p>
				<p>Сумма заказа: {totalPrice} р</p>
			</div>
		</div>
	);
};

export default Index;
