import React,{useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import Head from "components/common/Head";
import DatePicker from "react-datepicker";
import ko from 'date-fns/locale/ko';
import DPickerInput from "components/module/DPickerInput"

const LayoutIncentive = () => {
	const dispatch = useDispatch();
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();

	useEffect(()=>{
		dispatch(setTitle("THE CHECK 인센티브")); // header 제목
		dispatch(setSummary({
			title:"인센티브 등록",
			subTitle: "회원모집",
			step:[
				{
					num: 1,
					name: "시상 이벤트",
					state: "done"
				},
				{
					num: 2,
					name: "시상 이벤트 설정",
					state: "on"
				},
				{
					num: 3,
					name: "시상 이벤트 완료",
					state: ""
				},
			]
		})); 
	}, []);
	return (
		<section className="container p_incentive">
			<Head title="인센티브 Layout | 더체크"/>
			<div className="right mb20">
				<button className="btn_xls">다운로드</button>
			</div>
			<div className="content_top_info">
				<div className="unit">
					<span className="tit_sm">이벤트 타이틀</span>
					<span>150명 돌파</span>
				</div>
				<div className="unit">
					<span className="tit_sm">기간</span>
					<span>150명 돌파</span>
				</div>
				<div className="unit">
					<span className="tit_sm">목표회원수</span> 
					<span>150명 돌파</span>
				</div>
				<div className="unit">
					<span className="tit_sm">시상인원제한</span>
					<span>150명 돌파</span>
				</div>
				<div className="unit">
					<span className="tit_sm">지급방식</span>
					<span>건당 지급</span>
				</div>
				<div className="unit">
					<span className="tit_sm">인센티브</span>
					<span>150명 돌파</span>
				</div>
			</div>
			<h2>
				<span className="step">step 01</span> 시상 이벤트 설정
			</h2>
			<div className="col2">
				<div className="area">
					<h4>
						<strong className="num">01</strong> 시상 인센티브 지급 대상
					</h4>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk1"/><label className="chk" htmlFor="chk1">영업조직 단위</label></div>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk2"/><label className="chk" htmlFor="chk2">영업자 단위</label></div>
				</div>
				<div className="area">
					<h4>
						<strong className="num">02</strong> 시상 인센티브 지급 대상
					</h4>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3">모든조직</label></div>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk4"/><label className="chk" htmlFor="chk4">센터 소속</label></div>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk5"/><label className="chk" htmlFor="chk5">자사 소속</label></div>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk6"/><label className="chk" htmlFor="chk6">대리점(팀장) 소속</label></div>
					<div className="bx_chk big"><input type="checkbox" name="" id="chk7"/><label className="chk" htmlFor="chk7">매니저</label></div>
				</div>
			</div>
			<article className="cont form_create">
				<div className="col3">
					<div className="unit bx_ipt_tit">
						<strong className="tit">시상 이벤트 타이틀</strong>
						<input type="text"/>
					</div>
					<div className="unit bx_ipt_tit date">
						<strong className="tit">일정</strong>
						
						<DPickerInput style="ico w160" placeholder="시작일을 선택하세요"/><em>~</em> <DPickerInput style="ico w160" placeholder="종료일을 선택하세요"/>
					</div>
					<div className="unit bx_ipt_tit">
						<strong className="tit">초과 달성 시 추가 인센티브</strong>
						<div className="row">
							<div className="bx_chk big"><input type="checkbox" name="" id="chk8"/><label className="chk" htmlFor="chk8">포상금 지급</label></div>
							<div className="bx_chk big"><input type="checkbox" name="" id="chk9"/><label className="chk" htmlFor="chk9">건별 지급</label></div>
							<div className="bx_chk big"><input type="checkbox" name="" id="chk10"/><label className="chk" htmlFor="chk10">단계별 지급</label></div>
							<div className="bx_chk big"><input type="checkbox" name="" id="chk11"/><label className="chk" htmlFor="chk11">없음</label></div>
						</div>
					</div>
				</div>
				<div className="col3 mt45">
					<div className="unit bx_ipt_tit">
						<strong className="tit">목표 회원 수</strong>
						<input type="text"/>
					</div>
					<div className="unit bx_ipt_tit">
						<strong className="tit">시상 대상 영업자 수</strong>
						<input type="text"/>
					</div>
					<div className="unit bx_ipt_tit">
						<strong className="tit">인센티브 금액</strong>
						<input type="text"/> 
					</div>
				</div>
				<div className="bx_btn"> 
					<button className="btn fill">다음</button>
				</div>
			</article>
		</section>
	);
};

export default LayoutIncentive;