import React from 'react';
import s from './CardSkeleton.module.scss';

import ContentLoader from 'react-content-loader';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	return (
		<div className={s.wrapper}>
			<ContentLoader
				speed={0}
				width={359}
				height={379}
				viewBox='0 0 359 379'
				backgroundColor='#dedede'
				foregroundColor='#ffffff'
			>
				<rect x='110' y='33' rx='0' ry='0' width='0' height='1' />
				<rect x='-2' y='3' rx='0' ry='0' width='359' height='269' />
				<rect x='-2' y='286' rx='0' ry='0' width='359' height='22' />
				<rect x='1' y='346' rx='0' ry='0' width='155' height='27' />
				<rect x='1' y='319' rx='0' ry='0' width='135' height='18' />
				<rect x='214' y='337' rx='5' ry='5' width='143' height='40' />
			</ContentLoader>
		</div>
	);
};

export default Index;
