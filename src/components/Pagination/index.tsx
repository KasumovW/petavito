import React from 'react';
import s from './Pagination.module.scss';

import ReactPaginate from 'react-paginate';
import { useAppDispatch } from '../../hooks/redux';
import { changePage } from '../../redux/slice/productsSlice';

type Props = {};

const Index: React.FC<Props> = ({}) => {
	const dispatch = useAppDispatch();

	return (
		<ReactPaginate
			className={s.paginate}
			breakLabel='...'
			nextLabel='>'
			previousLabel='<'
			onPageChange={(e) => dispatch(changePage(e.selected + 1))}
			pageRangeDisplayed={3}
			pageCount={100 / 9}
			renderOnZeroPageCount={() => null}
		/>
	);
};

export default Index;
