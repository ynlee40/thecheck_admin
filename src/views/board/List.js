import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import {setPage} from "features/common/PaginateSlice";
import { Link } from "react-router-dom";
import Head from "components/common/Head";
import Select from "components/module/Select";
import Paginate from "components/common/Paginate";

const List = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		window.document.getElementsByTagName("body")[0].className = "p_board";
		dispatch(setTitle("THE CHECK 게시판")); // header 제목
		dispatch(setSummary({
			title:"게시판"
		})); 
		dispatch(setPage({
			type:"type2",
			info:"false"
		})); 
	}, []);
	return (
		<section className="container">
			<Head title="게시판 | 더체크"/>
			<div className="tab">
				<Link to="#" className="t_menu on">전체</Link>
				<Link to="#" className="t_menu">공지사항</Link>
				<Link to="#" className="t_menu">업데이트</Link>
				<Link to="#" className="t_menu">자유게시판</Link>
				<Link to="#" className="t_menu">자료실</Link>
			</div>
			<article className="wrap_boad">
				<div className="bx_search">
					<Select classNm="w170" list={[
						{name: "작성자"},
						{name: "제목"},
						{name: "내용"},
						{name: "제목+내용"},
					]} />
					<div className="bx_ipt i_search">
						<input type="text" className="ipt_ico"/>
						<button className="btn_search">검색</button>
					</div>
				</div>
				<div className="top">
					<div className="left">
						<button className="btn blue">선택항목 삭제</button> 
					</div>
					<div className="right">
						<button type="button" className="btn_create">작성</button>
					</div>
				</div>
				<table className="tbl_board">
					<thead>
						<tr>
							<th className="w40">
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</th>
							<th className="w140">작성자</th>
							<th className="w125">종류</th>
							<th className="td_cont">내용</th>
							<th className="w165">날짜</th>
							<th className="w70">조회수</th>
							<th className="w135">수정/삭제</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</td>
							<td>
								<button className="btn_profile"><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/><span>강하늘</span></button>
							</td>
							<td>공지사항</td>
							<td className="td_cont">
								<a href="#" className="tit">지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.</a>
							</td>
							<td>
								2021.08.06 14:59
							</td>
							<td>42</td>
							<td>
								<button className="btn_txt">수정</button>
								<button className="btn_txt">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</td>
							<td>
								<button className="btn_profile"><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/><span>강하늘</span></button>
							</td>
							<td>공지사항</td>
							<td className="td_cont">
								<a href="#" className="tit">지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.</a>
							</td>
							<td>
								2021.08.06 14:59
							</td>
							<td>42</td>
							<td>
								<button className="btn_txt">수정</button>
								<button className="btn_txt">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</td>
							<td>
								<button className="btn_profile"><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/><span>강하늘</span></button>
							</td>
							<td>공지사항</td>
							<td className="td_cont">
								<a href="#" className="tit">지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.</a>
							</td>
							<td>
								2021.08.06 14:59
							</td>
							<td>42</td>
							<td>
								<button className="btn_txt">수정</button>
								<button className="btn_txt">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</td>
							<td>
								<button className="btn_profile"><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/><span>강하늘</span></button>
							</td>
							<td>공지사항</td>
							<td className="td_cont">
								<a href="#" className="tit">지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.</a>
							</td>
							<td>
								2021.08.06 14:59
							</td>
							<td>42</td>
							<td>
								<button className="btn_txt">수정</button>
								<button className="btn_txt">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3"></label></div>
							</td>
							<td>
								<button className="btn_profile"><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/><span>강하늘</span></button>
							</td>
							<td>공지사항</td>
							<td className="td_cont">
								<a href="#" className="tit">지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게 일어나고 있습니다.</a>
							</td>
							<td>
								2021.08.06 14:59
							</td>
							<td>42</td>
							<td>
								<button className="btn_txt">수정</button>
								<button className="btn_txt">삭제</button>
							</td>
						</tr>
					</tbody>
				</table>
				<Paginate type="type2"/>
			</article>
		</section>
	);
};

export default List;