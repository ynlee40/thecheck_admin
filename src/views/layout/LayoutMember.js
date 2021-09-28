
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import {setPage} from "features/common/PaginateSlice";
import Head from "components/common/Head";
import DPickerInput from "components/module/DPickerInput";
import Paginate from "components/common/Paginate";
import {getPaginate} from "features/common/PaginateSlice";

const LayoutMember = () => {
	const dispatch = useDispatch();
	const paginate = useSelector(getPaginate);
	useEffect(()=>{
		window.document.getElementsByTagName("body")[0].className = "p_member";
		dispatch(setTitle("THE CHECK 회원")); // header 제목
		dispatch(setSummary({
			title:"회원 현황",
			subTitle: "서브타이틀",
			cInfo:  [
				{
					name: "신청",
					desc: "99900건"
				},
				{
					name: "접수",
					desc: "100건"
				},
				{
					name: "보류",
					desc: "400건"
				},
			],
		})); 
		dispatch(setPage({
			info:"false"
		})); 
		console.log(paginate);
	}, []);
	return (
		<section className="container">
			<Head title="회원 Layout | 더체크"/>
			<div className="area a_search">
				<h3>검색조건 설정</h3>
				<strong className="tit">기간설정</strong>
				<div className="bx">
					<DPickerInput classNm="ico half" placeholder="시작일을 선택하세요"/><DPickerInput classNm="ico half" placeholder="종료일을 선택하세요"/>
				</div>
				<strong className="tit">사용자 지정 검색</strong>
				<div className="bx_ipt">
					<input type="text" className="ipt_ico"/>
					<button className="btn_search">검색</button>
				</div>
				<strong className="tit">검색 필터</strong>
				<div className="bx_chk"><input type="checkbox" name="" id="chk1"/><label className="chk" htmlFor="chk1">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk2"/><label className="chk" htmlFor="chk2">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk4"/><label className="chk" htmlFor="chk4">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk5"/><label className="chk" htmlFor="chk5">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk6"/><label className="chk" htmlFor="chk6">체크2</label></div>
				<div className="bx_chk"><input type="checkbox" name="" id="chk7"/><label className="chk" htmlFor="chk7">체크2</label></div>
			</div>
			<div className="area a_slct">
				<h3>센터 선택</h3>
				<ul>
					<li><a href="#">전체</a></li>
					<li className="on"><a href="#">더체크프라임</a></li>
					<li><a href="#">더체크옴니</a></li>
					<li><a href="#">비즈코디</a></li>
				</ul>
			</div>
			<article className="area cont">
				<h3>상세 현황</h3>
				<table className="tbl_board">
					<thead>
						<tr>
							<th className="w70">순위</th>
							<th>영업단명</th>
							<th>소속</th>
							<th>회원가입</th>
							<th>정보등록수</th>
							<th>마지막영업일</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
						<tr>
							<td>1</td>
							<td>정보통신</td>
							<td>더체크프라임</td>
							<td>31</td>
							<td>20</td>
							<td>2021.10.10</td>
						</tr>
					</tbody>
				</table>
				<Paginate/>
			</article>
		</section>
	);
};

export default LayoutMember;