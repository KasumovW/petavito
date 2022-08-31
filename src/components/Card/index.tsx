import React from 'react';
import s from './Card.module.scss';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const [counter, setCounter] = React.useState(0);

	return (
		<div className={s.wrapper}>
			<a href='#'>
				<img
					className={s.mainImage}
					src='https://hdpic.club/uploads/posts/2021-12/thumbs/1639331474_35-hdpic-club-p-mersedes-w212-restailing-35.jpg'
					alt='Картинка не прогрузилась'
				/>
			</a>
			<p>Mercedes-Benz E63AMG</p>
			<p>Рейтинг: 7/10</p>
			<div>
				<p>Цена: 1.600.000 ₽</p>
				<button onClick={() => setCounter(counter + 1)}>
					Добавить <div>{counter}</div>
				</button>
			</div>
		</div>
	);
};

export default Index;
