import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import {setPage} from "features/common/PaginateSlice";
import {Link} from "react-router-dom";
import Head from "components/common/Head";
import Select from "components/module/Select";
import Paginate from "components/common/Paginate";

const Lab = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		window.document.getElementsByTagName("body")[0].className = "p_board";
		dispatch(setTitle("THE CHECK 게시판")); // header 제목
		dispatch(setSummary({
			title:"자료실"
		})); 
		dispatch(setPage({
			type:"type2",
			info:"false"
		})); 
	}, []);
	return (
		<section className="container">
			<Head title="자료실 | 더체크"/>
			<div className="tab">
				<Link to="#" className="t_menu">전체</Link>
				<Link to="#" className="t_menu">공지사항</Link>
				<Link to="#" className="t_menu">업데이트</Link>
				<Link to="#" className="t_menu">자유게시판</Link>
				<Link to="#" className="t_menu on">자료실</Link>
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
						<button className="btn gray">전체</button> 
						<button className="btn gray">회원가입</button> 
						<button className="btn gray">정보등록</button> 
						<button className="btn gray">이용가이드</button> 
						<button className="btn gray">카드메출누락</button> 
						<button className="btn gray">사용후기</button> 
						<button className="btn blue">홍보영상</button> 
					</div>
					<div className="right">
						<button type="button" className="btn_create">작성</button>
					</div>
				</div>
				<table className="tbl_board type2">
					<tbody>
						<tr>
							<td className="td_img">
								<div className="bx_video">
									<div className="dim">
										<button className="btn_play">재생버튼</button>
									</div>
									<video poster="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
								</div>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">회원가입</span>
								<h4><strong className="txt_point">회원가입방법_여신금융협회</strong></h4>
								<p className="desc">
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
								</p>
								<p className="info"><span>작성자 : 더체크본사</span><span>작성일: 2020-01-16</span></p>
							</td>
						</tr>
						<tr>
							<td className="td_img">
								<div className="bx_video">
									<div className="dim">
										<button className="btn_play">재생버튼</button>
									</div>
									<video poster="https://source.unsplash.com/QAB-WJcbgJk/60x60"></video>
								</div>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">회원가입</span>
								<h4><strong className="txt_point">회원가입방법_여신금융협회</strong></h4>
								<p className="desc">
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
								</p>
								<p className="info"><span>작성자 : 더체크본사</span><span>작성일: 2020-01-16</span></p>
							</td>
						</tr>
						<tr>
							<td className="td_img">
								<div className="bx_video">
									<div className="dim">
										<button className="btn_play">재생버튼</button>
									</div>
									<video poster="https://source.unsplash.com/QAB-WJcbgJk/60x60"></video>
								</div>
							</td>
							<td className="td_cont" onClick="">
								<span className="type">회원가입</span>
								<h4><strong className="txt_point">회원가입방법_여신금융협회</strong></h4>
								<p className="desc">
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
									신기술사업금융업을 영위하고 있는 여신전문금융회사를 회원으로 하는 비영리 사단법인 간단하게 
									더체크 [여신금융협회 회원가입방법] 여신금융협회란? 신용카드업, 시설대여업, 할부금융업 및
								</p>
								<p className="info"><span>작성자 : 더체크본사</span><span>작성일: 2020-01-16</span></p>
							</td>
						</tr>
					</tbody>
				</table>
				<Paginate/>
			</article>
		</section>
	);
};

export default Lab;