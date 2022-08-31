import React from 'react';
import s from './Cards.module.scss';

import Card from '../Card';
import CardSkeleton from '../CardSkeleton';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	return (
		<div className={s.wrapper}>
			<h1>Каталог</h1>
			<div className={s.cards}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
				<CardSkeleton />
			</div>
		</div>
	);
};

export default Index;
