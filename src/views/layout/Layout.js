import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import Head from "components/common/Head";
import Select from "components/module/Select";
import Paginate from "components/common/Paginate";
import DPickerInput from "components/module/DPickerInput";
import ko from 'date-fns/locale/ko';

const Layout = () => {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
	const tempList = [];

	const temp = <><td className="w70">123</td><td className="w100 txt_red">4019</td><td>더체크프라임</td><td>신한정보통신</td><td>강하늘 팀장</td><td>유연석</td><td>스타벅스</td><td>21/08/04</td><td className="txt_orange">100일</td><td>25,000원</td><td>900,000원</td><td>5,000원</td><td><span className="txt_hlight">2020/03/24</span></td>	<td className="w70"><button className="btn_msg">메모버튼</button></td><td className="w140">-</td></>;
	for (let i = 0; i < 20; i++) {
		tempList.push(temp);
	}

	useEffect(()=>{
		dispatch(setTitle("THE CHECK 영업관리")); // header 제목
		dispatch(setSummary({
			title:"사업 현황",
			subTitle: "서브타이틀",
			cInfo:  [
				{
					name: "총합",
					desc: "99900건"
				},
				{
					name: "신청",
					desc: "100건"
				},
				{
					name: "접수",
					desc: "400건"
				},
				{
					name: "보류",
					desc: "10건"
				},
				{
					name: "취소",
					desc: "0건"
				},
				{
					name: "완료",
					desc: "1000건"
				},
			],
		})); 
	}, []);
	return (
		<>
			<Head title="Layout | 더체크"/>
			<div className="content_top">
				<div className="left">
					<h2>2020년 1월 센터 지급예정내역</h2>
				</div>
				<div className="right">
					<button className="btn_grean fill">당월지급예정</button>
					<button className="btn_grean">이전지급예정</button>
					<em className="ico_bar"></em>
					<button className="btn_xls">다운로드</button>
				</div>
			</div>
			<section className="container">
				<div className="wrap_search">
					<div className="left">
						<div className="unit">
							<strong>대리점</strong>
							<Select list={[
								{name: "옵션1",},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4", on: true},
								{name: "옵션5"},
							]} />
						</div>
						<div className="unit">
							<strong>메니저</strong>
							<Select list={[
								{name: "옵션1", on: true,},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4"},
								{name: "옵션5"},
							]} width="w120" />
						</div>
						<div className="unit">
							<strong>조건</strong>
							<Select list={[
								{name: "옵션1", on: true,},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4"},
								{name: "옵션5"},
							]} />
							<input type="text"/>
						</div>
						<div className="unit">
							<strong>기간</strong>
							<DPickerInput classNm="" placeholder=""/><em>~</em><DPickerInput placeholder=""/>
						</div>
						<div className="unit">
							<button className="btn">조회</button>
							<button className="btn fill">배정</button>
						</div>
					</div>
					<div className="right">
						<button className="btn_grean fill">당월지급예정</button>
						<button className="btn_grean">이전지급예정</button>
						<em className="ico_bar"></em>
						<button className="btn_xls">다운로드</button>
					</div>
				</div>
				<article className="wrap_tbl">
					<div className="thead">
						<table className="tbl">
							<thead>
								<tr>
									<th className="w70"><button className="ico up">번호</button></th>
									<th className="w100"><button className="ico up">등록번호</button></th>
									<th><button className="ico">센터</button></th>
									<th><button className="ico">지사</button></th>
									<th><button className="ico up">00점<br/>(팀장)</button></th>

									<th><button className="ico">메니저</button></th>
									<th><button className="ico">사업장명</button></th>
									<th><button className="ico">등록일</button></th>
									<th><button className="ico">이용기간</button></th>
									<th><button className="ico">회원가입수익<br/>(원화)</button></th>

									<th><button className="ico">플랫폼수익</button></th>
									<th><button className="ico">기타수익</button></th>
									<th><button className="ico">상태/일정</button></th>
									<th className="w70"><button className="ico">비고</button></th>
									<th className="w140"><button>주문상태</button></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbody">
						<table className="tbl">
							<tbody>
								<tr>
									<td className="w70">123</td>
									<td className="w100 txt_red">4019</td>
									<td>더체크프라임</td>
									<td>신한정보통신</td>
									<td>강하늘 팀장</td>
									
									<td>유연석</td>
									<td>스타벅스</td>
									<td>21/08/04</td>
									<td className="txt_orange">100일</td>
									<td>25,000원</td>

									<td>900,000원</td>
									<td>5,000원</td>
									<td><span className="txt_hlight">2020/03/24</span></td>
									<td className="w70"><button className="btn_msg">메모버튼</button></td>
									<td className="w140"><button className="btn fill">접수</button></td>
								</tr>
								<tr>
									<td className="w70">123</td>
									<td className="w100 txt_red">4019</td>
									<td>더체크프라임</td>
									<td>신한정보통신</td>
									<td>강하늘 팀장</td>
									
									<td>유연석</td>
									<td>스타벅스</td>
									<td>21/08/04</td>
									<td className="txt_orange">100일</td>
									<td>25,000원</td>

									<td>900,000원</td>
									<td>5,000원</td>
									<td><span className="txt_hlight">2020/03/24</span></td>
									<td className="w70"><button className="btn_msg">메모버튼</button></td>
									<td className="w140">-</td>
								</tr>
								<tr>
									<td className="w70">123</td>
									<td className="w100 txt_red">4019</td>
									<td>더체크프라임</td>
									<td>신한정보통신 <span className="txt_red">(지사)</span></td>
									<td>강하늘 팀장</td>
									
									<td>유연석</td>
									<td>스타벅스</td>
									<td>21/08/04</td>
									<td className="txt_orange">100일</td>
									<td>25,000원</td>

									<td>900,000원</td>
									<td>5,000원</td>
									<td><span className="txt_hlight">2020/03/24</span></td>
									<td className="w70"><button className="btn_msg">메모버튼</button></td>
									<td className="w140"><button className="btn fill">접수</button></td>
								</tr>
								<tr className="total">
									<td className="w70">123</td>
									<td className="w100 txt_red">4019</td>
									<td>더체크프라임</td>
									<td>신한정보통신 <span className="txt_red">(지사)</span></td>
									<td>강하늘 팀장</td>
									
									<td>유연석</td>
									<td>스타벅스</td>
									<td>21/08/04</td>
									<td className="txt_orange">100일</td>
									<td>25,000원</td>

									<td>900,000원</td>
									<td>5,000원</td>
									<td><span className="txt_hlight">2020/03/24</span></td>
									<td className="w70"><button className="btn_msg">메모버튼</button></td>
									<td className="w140"><button className="btn fill">접수</button></td>
								</tr>
								<tr className="total big">
									<td className="w70">123</td>
									<td className="w100 txt_red">4019</td>
									<td>더체크프라임</td>
									<td>신한정보통신 <span className="txt_red">(지사)</span></td>
									<td>강하늘 팀장</td>
									
									<td>유연석</td>
									<td>스타벅스</td>
									<td>21/08/04</td>
									<td className="txt_orange">100일</td>
									<td>25,000원</td>

									<td>900,000원</td>
									<td>5,000원</td>
									<td><span className="txt_hlight">2020/03/24</span></td>
									<td className="w70"></td>
									<td className="w140"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</article>
				<Paginate/>
				<article className="wrap_tbl scroll">
					<div className="thead">
						<table className="tbl">
							<thead>
								<tr>
									<th className="w70"><button className="ico up">번호</button></th>
									<th className="w100"><button className="ico up">등록번호</button></th>
									<th><button className="ico">센터</button></th>
									<th><button className="ico">지사</button></th>
									<th><button className="ico up">00점<br/>(팀장)</button></th>

									<th><button className="ico">메니저</button></th>
									<th><button className="ico">사업장명</button></th>
									<th><button className="ico">등록일</button></th>
									<th><button className="ico">이용기간</button></th>
									<th><button className="ico">회원가입수익<br/>(원화)</button></th>

									<th><button className="ico">플랫폼수익</button></th>
									<th><button className="ico">기타수익</button></th>
									<th><button className="ico">상태/일정</button></th>
									<th className="w70"><button className="ico">비고</button></th>
									<th className="w140"><button>주문상태</button></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbody">
						<table className="tbl">
							<tbody>
								{//tr 하위에 공백 태그를 넣어서 오류뜸 api 연동 하면 컴포먼트로 뺼 예정
									tempList.map((item, i)=><tr key={i}>{item}</tr>)
								}
							</tbody>
						</table>
					</div>
				</article>
			</section>
		</>
	);
};

export default Layout;