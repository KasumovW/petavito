import React from 'react';

import s from './Main.module.scss';

import search from '../../assets/img/search.svg';
import clear from '../../assets/img/clear.svg';

import Category from '../../components/Category';
import Cards from '../../components/Cards';

type Props = {};

const Index: React.FC = (props: Props) => {
	const [title, setTitle] = React.useState<string>('');

	return (
		<div className={s.wrapper}>
			<div className={s.searchBlock}>
				<img className={s.search} src={search} alt='Иконка не прогрузилась' />
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type='text'
				/>
				<img
					onClick={() => setTitle('')}
					src={clear}
					alt='Иконка не прогрузилась'
				/>
			</div>
			<Category />
			<Cards />
		</div>
	);
};

export default Index;
