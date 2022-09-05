import React from 'react';
import s from './Cart.module.scss';

import CartItem from '../../components/CartItem';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	return (
		<div className={s.wrapper}>
			<h1>Your Cart 4 items</h1>
			<div className={s.items}>
				<CartItem />
			</div>
		</div>
	);
};

export default Index;
