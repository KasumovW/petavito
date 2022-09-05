import React from 'react';
import s from './CartItem.module.scss';

import x from '../../assets/img/x.svg';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	return (
		<div className={s.item}>
			<img
				src='https://yastatic.net/naydex/autoru/gA1gV4830/847ebfOU9_MK/nj6dG4FkS6kwXjzN7ettxBaGWs0DOEOyhuBDXZplTWAGAexT7j-PuTDa6xd2L3fpvgR45bxNMhonSBVSUFJyP89LDCqA1N74ZNqJ-fi-GUX3456M86vhBETjMe-YZovD9BDJ9_vuW432bJvlcApH34uiCrd_vHWLEcqBB-Ln88mNba74FMYqaIQtX3_sODyT5QS4qePagdYlg-Dtijb40jdz6NWZC_guhy7P1VJItx5JA4nG7N92yVHbofRSxLLKU'
				alt='Картинка не прогрузилась'
			/>
			<p>Product title</p>
			<p>Product priceasda ₽</p>
			<div className={s.count}>
				<button>-</button>
				<p>12003</p>
				<button>+</button>
			</div>
			<p>
				112421523452 ₽
				<img src={x} alt='Картинка не прогрузилась' />
			</p>
		</div>
	);
};

export default Index;
