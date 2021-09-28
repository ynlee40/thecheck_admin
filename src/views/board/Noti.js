import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import {setPage} from "features/common/PaginateSlice";
import {Link} from "react-router-dom";
import Head from "components/common/Head";
import Select from "components/module/Select";
import Paginate from "components/common/Paginate";

const Board = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		window.document.getElementsByTagName("body")[0].className = "p_board";
		dispatch(setTitle("THE CHECK 게시판")); // header 제목
		dispatch(setSummary({
			title:"공지사항"
		})); 
		dispatch(setPage({
			type:"type2",
			info:"false"
		})); 
	}, []);
	return (
		<section className="container">
			<Head title="공지사항 | 더체크"/>
			<div className="tab">
				<Link to="#" className="t_menu">전체</Link>
				<Link to="#" className="t_menu on">공지사항</Link>
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
						<p className="total">게시글 <strong>18</strong>건</p>
					</div>
					<div className="right">
						<button type="button" className="btn_create">작성</button>
					</div>
				</div>
				<table className="tbl_board type1">
					<tbody>
						<tr>
							<td className="td_img">
								<img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">공지사항</span>
								<h4><strong className="txt_point">더체크</strong>는 700만 사업주님들과 함께할 준비가 되어있습니다!</h4>
								<p className="desc">
									점검일시: 01월 16일 14:00 ~ 16:00시 까지 / 점검내용: 서비스 안정화 점검
								</p>
								{/* <button className="btn grean_line">안내</button> */}
							</td>
							<td className="td_date">
								2020-01-16
							</td>
						</tr>
						<tr>
							<td className="td_img">
								<img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">공지사항</span>
								<h4><strong className="txt_point">더체크</strong>는 700만 사업주님들과 함께할 준비가 되어있습니다!</h4>
								<p className="desc">
									점검일시: 01월 16일 14:00 ~ 16:00시 까지 / 점검내용: 서비스 안정화 점검
								</p>
								{/* <button className="btn grean_line">안내</button> */}
							</td>
							<td className="td_date">
								2020-01-16
							</td>
						</tr>
						<tr>
							<td className="td_img">
								<img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">공지사항</span>
								<h4><strong className="txt_point">더체크</strong>는 700만 사업주님들과 함께할 준비가 되어있습니다!</h4>
								<p className="desc">
									지금도 카드결제 시스템의 빈틈을 악용하는 범죄가 빈번하게일어나고 있습니다.<br/>
									POS에서 확인 할 수 없었던 카드사 미입금 고의승인취소,전화승인취소,POS 데이터 삭제,망상취소,횡령 등 다양한 카드사의 미입금(누락)을 1초 만에 확인 할 수 있습니다.
								</p>
								{/* {/* <button className="btn grean_line">안내</button> */}
							</td>
							<td className="td_date">
								2020-01-16
							</td>
						</tr>
					</tbody>
				</table>
				<Paginate/>
			</article>
		</section>
	);
};

export default Board;