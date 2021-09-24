import React from 'react';
import {useSelector} from "react-redux";
import {getPaginate} from "features/common/PaginateSlice";

const Paging = () => {
	const paginate = useSelector(getPaginate);
	const start = paginate.start;
	const end = paginate.end;
	let temp = [];
	for (let i=start; i <= end; i++) {
		temp.push(i);
	}
	return (
		<div className={"paginate "+ paginate.type}>
			<button type="button" className="btn_prev dis">이전</button>
				{
					temp.map((item, i) => {
						return <button type="button" className={"btn " +(paginate.onIndex === i && "on")} key={i}>{item}</button>
					})
				}
			<button type="button" className="btn_next">다음</button>
			<div className="info">
				<strong>항목 수</strong> <input type="number" className="ipt_page w30" defaultValue="20"/>
				<span className="desc">총 1207 중 1- 20</span>
			</div>
		</div>
	);
};

export default Paging;