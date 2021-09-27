import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import Head from "components/common/Head";
import { setLayoutOn } from "features/common/SettingSlice";
import DPickerInput from "components/module/DPickerInput";
import Select from "components/module/Select";
import "scss/nonProject/module.scss"; 

const Module = () => {
	const dispatch = useDispatch();
	const location = window.location.href;
	useEffect(()=>{
		dispatch(setLayoutOn(false));
		// if (location.indexOf("module") > -1) dispatch(setLayoutOn(false)); 
		// return () => dispatch(setLayoutOn(true));
		// window.scrollTo(0, scrollTop); 
	}, []);
	return (
		<>
			<Head title="모듈 페이지 | 더체크"/>
			<div className="i_header">
				<h1>📝&nbsp;&nbsp;&nbsp;통합페이지 모듈</h1>
				<div className="i_menu">
					<a href="#i_bx1">스타일 가이드</a> | 
					<a href="#i_bx2">입력폼 & 버튼</a> | 
					<a href="#i_bx3">component</a> | 
					<a href="#i_bx4">temp</a>
				</div>
			</div>0
			<section className="i_container">
				<article className="i_bx show_flex flex" id="i_bx1">
					<div className="left">
						<h2>🎯 스타일 가이드</h2>
						<h3>🍉 width - 인라인 스타일 대신 사용할 가로값 클래스</h3>
						<div className="i_cont">
							5px 간격으로 30px ~ 300px 까지 클래스(w30~300) 있습니다<br/>
							<div className="code mt10">
								{'<div className="w150">...'}<br/> 
								{'<input className="w200"/>'}<br/>
							</div>
						</div>
						<h3>🍉 margin</h3>
						<div className="i_cont">
							5px 간격으로 5px ~ 50px 까지 클래스(m*5~50)가 있습니다<br/>
							margin-top : ex) .mt5 (margin-top 5px)<br/>
							margin-bottom : ex) .mb25 (margin-bottom 25px)<br/>
							margin-left : ex) .ml10 (margin-left 10px)<br/>
							margin-right : ex) .mr50 (margin-right 50px)<br/>
						</div>
						<h3>🍉 padding</h3>
						<div className="i_cont">
							5px 간격으로 5px ~ 50px 까지 클래스(m*5~50)가 있습니다<br/>
							padding-top : ex) .mt5 (padding-top 5px)<br/>
							padding-bottom : ex) .mb25 (padding-bottom 25px)<br/>
							padding-left : ex) .ml10 (padding-left 10px)<br/>
							padding-right : ex) .mr50 (padding-right 50px)<br/>
						</div>
						<h3>🍉 제목 크기</h3>
						<div className="i_cont">
							<span style={{"fontSize": "56px"}}>h1 : 56px</span>
							<span style={{"fontSize": "24px"}}>h2 : 24px</span>
							<span style={{"fontSize": "20px"}}>h3 : 20px</span>
							<span style={{"fontSize": "16px"}}>h4 : 16px</span>
						</div>
					</div>
					<div className="right">
						<h3>🍉 노출</h3>
						<div className="i_cont">
							텍스트 숨기기 : .blind<br/>
							요소 숨기기 : .hide<br/>
							요소 노출1 : .show (display:block)<br/>
							요소 노출2 : .show_flex (display:flex)<br/>
						</div>
						<h3>🍉 글자 색상</h3>
						<div className="i_cont">
							<span className="txt_white"><em style={{"background":"#777"}}>#ffffff : .txt_white</em></span>
							<span className="txt_black">.txt_black : #000000</span>
							<span className="txt_green">.txt_green : #025454</span>
							<span className="txt_green_light">.txt_green_light : #00a9c0</span>
							<span className="txt_green_dark">.txt_green_dark : #2f4d56</span>
							<span className="txt_bule_light">.txt_bule_light : #005ec0</span>
							<span className="txt_bule_dark">.txt_bule_dark : #002470</span>
							<span className="txt_brown_light">.txt_brown_light : #9a8478</span>
							<span className="txt_brown_dark">.txt_brown_dark : #1e130c</span>
							<span className="txt_purple_light">.txt_purple_light : #c567d8</span>
							<span className="txt_purple_dark">.txt_purple_dark : #361bb2</span>
							<span className="txt_yellow">.txt_yellow : #fdef72</span>
							<span className="txt_red">.txt_purple_light : #c567d8</span>
							<span className="txt_orange">.txt_purple_dark : #361bb2</span>
							<span className="txt_point">.txt_yellow : #fdef72</span>
						</div>
						<h3>🍉 형광펜 스타일</h3>
						<div className="i_cont">
							<span className="txt_hlight">.txt_hlight : #000000</span>
							<span className="txt_hlight orange">.txt_hlight.orange : #025454</span>
							<span className="txt_hlight grean">.txt_hlight.grean : #00a9c0</span>
							<span className="txt_hlight red">.txt_hlight.red : #2f4d56</span>
							<span className="txt_hlight purple">.txt_hlight.purple : #005ec0</span>
						</div>
						<h3>🍉 박스 스타일</h3>
						<div className="i_cont">
							<span className="txt_line">.txt_line : #000000</span>
							<span className="txt_line orange">.txt_line.orange : #FF6F06</span>
							<span className="txt_line blue">.txt_line.grean : #005ec0</span>
							<span className="txt_line red">.txt_line.red : #DF3333</span>
						</div>
					</div>
				</article>
				<article className="i_bx flex" id="i_bx2">
					<div className="left">
						<h2>🎯 입력 & 버튼</h2>
						<h3>🍉 input</h3>
						<div className="i_cont">
							<h4>기본</h4>
							<span className="noti">- 가로 크기는 기본 100px입니다. 다른 크기를 원하시면 인라인 스타일로 지정해서 사용 가능 합니다.</span>
							<input type="text" placeholder="입력해주세요!!" style={{"width": "200px"}}/><br/>
							<h4>추가 가능한 스타일</h4>
							<p>.big : 높이 40px<br/><input type="text" placeholder="입력해주세요!!" className="big"/></p>
							<p>.half : 가로 크기 50% <br/>ex) &lt;td or div&gt; &lt;input type="text" className="half" &gt; &lt;input type="text" className="half"&gt; &lt;/td or div&gt;<br/></p>
							<p>.bx_ipt : input + 돋보기 버튼 (기본크기 : 130px, .big 크기 : 150px)</p>
							<div className="bx_ipt" style={{"width": "150px"}}>
								<input type="text" className="ipt_ico"/>
								<button className="btn_search">검색</button>
							</div>
							<div className="bx_ipt big">
								<input type="text" className="ipt_ico"/>
								<button className="btn_search">검색</button>
							</div>
							<h4>ex)</h4>
							<div className="code">
								{'<input type="text" placeholder="입력해주세요!!" style={{"width": "200px"}}/>'}<br/>
								{'<input type="text" className="big" placeholder="입력해주세요!!"/>'}<br/>
								{'<div className="bx_ipt" style={{"width": "150px"}}>'}<br/>
								<em className="mr30"></em>{'<input type="text" className="ipt_ico" placeholder="입력해주세요!!"/>'}<br/>
								<em className="mr30"></em>{'<button className="btn_search">검색</button>'}<br/>
								{'</div>'}<br/>
								{'<div className="bx_ipt big" style={{}}>'}<br/>
								<em className="mr30"></em>{'<input type="text" className="ipt_ico" placeholder="입력해주세요!!"/>'}<br/>
								<em className="mr30"></em>{'<button className="btn_search">검색</button>'}<br/>
								{'</div>'}<br/>
							</div>
						</div>
						<h3>🍉 select</h3>
						<div className="i_cont">
							<span className="noti">옵션에 on값이 비워져 있으면 select값으로 세팅됩니다.</span>
							<span className="noti">title 값이 없으면 첫번째 옵션으로 선택됩니다.</span>
							<span className="noti">- 가로 크기는 기본 100px입니다. 다른 크기를 원하시면 w가로값(ex : w150) 클래스 추가해서 사용 가능 합니다.</span>
							<p>.big : 높이 40px</p>
							<Select list={[
								{name: "옵션1",},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4", on: true},
								{name: "옵션5"},
							]} />
							<Select classNm="w170" title="옵션을 선택해주세요" list={[
								{name: "옵션1", on: true},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4"},
								{name: "옵션5"},
							]} />
							<Select classNm="w100" title="과일을 선택해주세요" list={[
								{name: "사과", on: true},
								{name: "배"},
								{name: "귤"},
								{name: "포도"},
								{name: "망고"},
							]} />
							<Select classNm="w150 big"  list={[
								{name: "옵션1"},
								{name: "옵션2"},
								{name: "옵션3"},
								{name: "옵션4"},
								{name: "옵션5"},
							]} /> 
							<div className="code mt15">
								{'<Select classNm="w170" title="옵션을 선택해주세요" list={['}<br/>
								<em className="mr30"></em>{'{name: "옵션1"},'}<br/>
								<em className="mr30"></em>{'{name: "옵션2"},'}<br/>
								<em className="mr30"></em>{'{name: "옵션3"},'}<br/>
								<em className="mr30"></em>{'{name: "옵션4"},'}<br/>
								<em className="mr30"></em>{'{name: "옵션5"},'}<br/>
								{']} />'}<br/>
								{'<Select classNm="w200" list={['}<br/>
								<em className="mr30"></em>{'{name: "옵션1", on: true},'}<br/>
								<em className="mr30"></em>{'{name: "옵션2"},'}<br/>
								<em className="mr30"></em>{'...'}<br/>
								{'<Select classNm="w100 big" list={['}<br/>
								<em className="mr30"></em>{'...'}<br/>
							</div>
						</div>
						<h3>
							🍉 checkbox
						</h3>
						<div className="i_cont">
							<div className="bx_chk"><input type="checkbox" name="" id="chk1"/><label className="chk" htmlFor="chk1">체크1</label></div>
							<div className="bx_chk big"><input type="checkbox" name="" id="chk2"/><label className="chk" htmlFor="chk2">체크2</label></div>

							<div className="bx_chk white"><input type="checkbox" name="" id="chk3"/><label className="chk" htmlFor="chk3">체크1</label></div>
							<div className="bx_chk white big"><input type="checkbox" name="" id="chk4"/><label className="chk" htmlFor="chk4">체크2</label></div>
							<div className="code mt15">
								{'<div className="bx_chk">'}<br/>
									<em className="mr30"></em>{'<input type="checkbox" name="" id="chk1"/>'}<br/>
									<em className="mr30"></em>{'<label className="chk" htmlFor="chk1">체크1</label>'}<br/>
								{'</div>'}<br/>
								{'<div className="bx_chk big">...</div>'}
								{'<div className="bx_chk white">...</div>'}
								{'<div className="bx_chk white big">...</div>'}
							</div>
						</div>
						<h3>
							🍉 radiobox
						</h3>
						<div className="i_cont">
							<div className="bx_radio"><input type="radio" name="radio" id="radio1"/><label className="radio" htmlFor="radio1">체크1</label></div>
							<div className="bx_radio"><input type="radio" name="radio" id="radio2"/><label className="radio" htmlFor="radio2">체크2</label></div>

							<div className="bx_radio white"><input type="radio" name="radio1" id="radio3"/><label className="radio" htmlFor="radio3">병아리</label></div>
							<div className="bx_radio white"><input type="radio" name="radio1" id="radio4"/><label className="radio" htmlFor="radio4">닭</label></div>

							<div className="bx_radio big"><input type="radio" name="radio2" id="radio5"/><label className="radio" htmlFor="radio5">뮤지컬</label></div>
							<div className="bx_radio big"><input type="radio" name="radio2" id="radio6"/><label className="radio" htmlFor="radio6">락페스티벌</label></div>
							<div className="code">
								{'<div className="bx_radio">'}<br/>
									<em className="mr30"></em>{'<input type="radio" name="radio" id="radio1"/>'}<br/>
									<em className="mr30"></em>{'<label className="radio" htmlFor="radio1">체크1</label>'}<br/>
								{'</div>'}<br/>
								{'<div className="bx_radio big">...</div>'}<br/>
								{'<div className="bx_radio white">...</div>'}<br/>
								{'<div className="bx_radio white big">...</div>'}
							</div>
						</div>
					</div>
					<div className="right">
						<h3>🍉 input - Date</h3>
						<div className="i_cont">
							<h4>input text 타입에 <strong>ipt_date</strong> 클래스를 추가해주세요.</h4>
							<span className="noti">- 가로 크기는 기본 100px입니다. 다른 크기를 원하시면 인라인 스타일로 지정해서 사용 가능 합니다.</span>
							<span className="noti">- 달력은 입력이 안되게 input readOnly 추가 해주세요 </span>
							<div className="mb15">
								<DPickerInput classNm="" placeholder=""/>
							</div>
							<div className="mb15">
								<DPickerInput classNm="big ico" placeholder="날짜를 입력해주세요"/>
							</div>
							<h4>추가 가능한 스타일</h4>
							<p>.big : 높이 40px</p>
							<p>.ico : 달력 아이콘 노출</p>
							<h4>ex)</h4>
							<div className="code">
								{'<DPickerInput>'}<br/>
								{'<DPickerInput classNm="ico" placeholder=""/>'}<br/>
								{'<DPickerInput classNm="big ico" placeholder="날짜를 입력해주세요"/>'}
							</div>
						</div>
						<h3 >
							🍉 button
						</h3>
						<div className="i_cont">
							<h4>basic</h4>
							<p>.btn : <button className="btn">조회</button></p>
							<h4>size</h4>
							<p>.sm : <button className="btn sm">조회</button></p>
							<p>.big : <button className="btn big">조회</button></p>
							<div className="code">
								{'<button className="btn sm">조회</button>'}<br/>
								{'<button className="btn big">조회</button>'}<br/>
							</div>
							<h4>color</h4>
							<p>.blue_line : <button className="btn blue_line">조회</button></p>
							<p>.blue_bg : <button className="btn blue_bg">지급하기</button></p>
							<p>.dis : <button className="btn dis">조회</button></p>
							<p>.grean : <button className="btn grean">이전지급내역</button></p>
							<p>.grean_line : <button className="btn grean_line">이전지급내역</button></p>
							<div className="code">
								{'<button className="btn blue_line">조회</button>'}<br/>
								{'<button className="btn dis">조회</button>'}<br/>
								{'<button className="btn blue_line sm">조회</button>'}<br/>
								...
							</div>
							<h4>ico</h4>
							<p>.grean.ico_down : <button className="btn grean ico_down">검색필터 보기</button></p>
							<p>.grean_line.ico_down : <button className="btn grean_line ico_down">검색필터 보기</button></p>
							<div className="code">
								{'<button className="btn grean ico_down">조회</button>'}<br/>
								{'<button className="btn grean_line ico_down">조회</button>'}<br/>
							</div>
							
							<h4>etc</h4>
							<p>.btn_plus : <button className="btn_plus">+</button><em className="mr20"></em>.btn_plus.dis : <button className="btn_plus dis">+</button></p>
							<p>.btn_minus : <button className="btn_minus">-</button><em className="mr20"></em>.btn_minus.dis : <button className="btn_minus dis">-</button></p>
							<p className="mb50">.btn_msg : <button className="btn_msg">메모버튼</button><em className="mr20"></em>.btn_txt : <button className="btn_txt">…</button></p>
						</div>
					</div>
				</article>
			</section>
			{/* 
				<article className="i_bx flex" id="i_bx3">
					<div className="full">
						<h2>🎯 Component 가이드</h2>
						<h3>🍉 table - 스크롤 없는 테이블</h3> 
						<span className="noti">
							- 테이블 셀 크기는 .thead colgroup col 인라인 스타일로 지정해주세요. <br/>
							제목 테이블과 내용 테이블 셀크기가 다를 경우 꼭 width 값을 지정해주시기 바랍니다.
						</span>
						<span className="noti txt_black">
							- 자세한 코드는 layout.html 파일을 참고 부탁드립니다.
						</span>
						<article className="wrap_tbl">
							<div className="thead">
								<table className="tbl">
									<colgroup> 
										<col style="width: 60px;"> 
										<col style="width: 80px;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 

										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 

										<col style="width:60px"> 
										<col style="width: 140px;"> 
									</colgroup>
									<thead>
										<tr>
											<th><button className="ico up">번호&nbsp</button></th>
											<th><button className="ico up">등록번호&nbsp</button></th>
											<th><button className="ico">센터&nbsp</button></th>
											<th><button className="ico">지사&nbsp</button></th>
											<th><button className="ico">00점 (팀장)&nbsp</button></th>

											<th><button className="ico">사업장명&nbsp</button></th>
											<th><button className="ico">등록일&nbsp</button></th>
											<th><button className="ico">이용기간&nbsp</button></th>
											<th><button className="ico">플랫폼수익&nbsp</button></th>
											<th><button className="ico">기타수익&nbsp</button></th>

											<th><button className="ico">상태/일정&nbsp</button></th>
											<th><button className="ico">비고&nbsp</button></th>
											<th><button>주문상태&nbsp</button></th>
										</tr>
									</thead>
								</table>
							</div>
							<div className="tbody">
								<table className="tbl">
									<tbody>
										<tr>
											<td>123</td>
											<td className="txt_red">4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td >스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td>-</td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight grean">2020/03/24</span></td>
											<td><button className="btn_txt">…</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight red">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight purple">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td>스타벅스<br/>00점</td>
											<td>21/08/04</td>
											<td>100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight">2020/03/24</span></td>
											<td><button className="btn_txt">…</button></td>
											<td><button className="btn_blue">상세</button><button className="btn_blue fill">처리이력</button></td>
										</tr>
										<tr className="total">
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td>2020/03/24</td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td></td>
										</tr>
										<tr className="total big">
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td>2020/03/24</td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</article> 
						<h3>🍉 table - 스크롤 있는 상단이 고정되는 테이블</h3>
						<span className="noti">
							- 스크롤 기능이 있는 테이블은 .wrap_tbl에 scroll 클래스를 추가해주세요. | ex) className="wrap_tbl scroll"
						</span>
						<span className="noti">
							- 테이블 셀 크기는 .thead colgroup col 인라인 스타일로 지정해주세요. <br/>
							제목 테이블과 내용 테이블 셀크기가 다를 경우 꼭 width 값을 지정해주시기 바랍니다.
						</span>
						<article className="wrap_tbl scroll">
							<div className="thead">
								<table className="tbl">
									<colgroup> 
										<col style="width: 60px;"> 
										<col style="width: 80px;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 

										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 
										<col style="width: auto;"> 

										<col style="width:60px"> 
										<col style="width: 140px;"> 
									</colgroup>
									<thead>
										<tr>
											<th><button className="ico up">번호&nbsp</button></th>
											<th><button className="ico up">등록번호&nbsp</button></th>
											<th><button className="ico">센터&nbsp</button></th>
											<th><button className="ico">지사&nbsp</button></th>
											<th><button className="ico">00점 (팀장)&nbsp</button></th>

											<th><button className="ico">사업장명&nbsp</button></th>
											<th><button className="ico">등록일&nbsp</button></th>
											<th><button className="ico">이용기간&nbsp</button></th>
											<th><button className="ico">플랫폼수익&nbsp</button></th>
											<th><button className="ico">기타수익&nbsp</button></th>

											<th><button className="ico">상태/일정&nbsp</button></th>
											<th><button className="ico">비고&nbsp</button></th>
											<th><button>주문상태&nbsp</button></th>
										</tr>
									</thead>
								</table>
							</div>
							<div className="tbody">
								<table className="tbl">
									<tbody>
										<tr>
											<td>123</td>
											<td className="txt_red">4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td >스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td>-</td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신 <span className="txt_red">(지사)</span></td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight orange">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight grean">2020/03/24</span></td>
											<td><button className="btn_txt">…</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight red">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight purple">2020/03/24</span></td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td><button className="btn_blue fill">접수</button></td>
										</tr>
										<tr>
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td>스타벅스<br/>00점</td>
											<td>21/08/04</td>
											<td>100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td><span className="txt_hlight">2020/03/24</span></td>
											<td><button className="btn_txt">…</button></td>
											<td><button className="btn_blue">상세</button><button className="btn_blue fill">처리이력</button></td>
										</tr>
										<tr className="">
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td>2020/03/24</td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td></td>
										</tr>
										<tr className="">
											<td>123</td>
											<td>4019</td>
											<td>더체크프라임</td>
											<td>신한정보통신</td>
											<td>강하늘 팀장</td>

											<td className="txt_red">스타벅스</td>
											<td>21/08/04</td>
											<td className="txt_orange">100일</td>
											<td>900,000원</td>
											<td>5,000원</td>

											<td>2020/03/24</td>
											<td><button className="btn_msg">메모버튼</button></td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</article> 
		<pre><xmp><article className="wrap_tbl"><!-- 스크롤 테이블 <article className="wrap_tbl scroll">  --> 
			<div className="thead">
				<table className="tbl">
				<colgroup> 
					<col style="width: 60px;"> 
					<col style="width: auto;"> 
					...
				</colgroup>
				<thead>
					<tr>
						<th><button className="ico up">번호&nbsp</button></th>
						<th><button className="ico up">등록번호&nbsp</button></th>
						...
					</tr>
				</thead>
				</table>
			</div>
			<div className="tbody">
				<table className="tbl">
					<tbody>
						<tr>
							<td>123</td>
							<td className="txt_red">4019</td>
							...
						</tr>
						...
					</tbody>
				</table>
			</div>
			</article>
		</xmp></pre>
						<h3 className="mt40">🍉 table - 공지사항/자료실 게시판</h3> 
						<span className="noti">
							- t.bl_board.type1 (공지사항) / .tbl_board.type2(자료실)
						</span>
						<span className="noti txt_black">
							- 자세한 코드는 01_board/lab.html, 01_board/noti.html 파일을 참고 부탁드립니다.
						</span>
						<p className="mt20 mb15">.tbl_board.type1</p>
						<table className="tbl_board type1">
							<tr>
								<td className="td_img">
									<img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진">
								</td>
								<td className="td_cont">
									<span className="type">공지사항</span>
									<h4><strong className="txt_point">더체크</strong>는 700만 사업주님들과 함께할 준비가 되어있습니다!</h4>
									<p className="desc">
										점검일시: 01월 16일 14:00 ~ 16:00시 까지 / 점검내용: 서비스 안정화 점검
									</p>
									<button className="btn_grean">안내</button>
								</td>
								<td className="td_date">
									2020-01-16
								</td>
							</tr>
							<tr>
								<td className="td_img">
									<img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진">
								</td>
								<td className="td_cont">
									<span className="type">공지사항</span>
									<h4><strong className="txt_point">더체크</strong>는 700만 사업주님들과 함께할 준비가 되어있습니다!</h4>
									<p className="desc">
										점검일시: 01월 16일 14:00 ~ 16:00시 까지 / 점검내용: 서비스 안정화 점검
									</p>
									<button className="btn_grean">안내</button>
								</td>
								<td className="td_date">
									2020-01-16
								</td>
							</tr>
						</table>
						<p className="mt40 mb15">.tbl_board.type2</p>
						<table className="tbl_board type2">
							<tr>
								<td className="td_img">
									<div className="bx_video">
										<div className="dim">
											<button className="btn_play">재생버튼</button>
										</div>
										<video poster="https://source.unsplash.com/QAB-WJcbgJk/60x60"></video>
									</div>
								</td>
								<td className="td_cont">
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
						</table>
						<h3 className="mt40">🍉 paging</h3>
						<div className="paginate mt10 mb10">
							<button href="#" className="btn_page_prev dis">이전</button>
							<button className="btn_page on">1</button>
							<button className="btn_page">2</button>
							<button className="btn_page">3</button>
							<button className="btn_page">4</button>
							<button className="btn_page">5</button>
							<em>…</em>
							<button className="btn_page">96</button>
							<button className="btn_page">97</button>
							<button className="btn_page">98</button>
							<button className="btn_page">99</button>
							<button className="btn_page">100</button>
							<button href="#" className="btn_page_next">다음</button>
							<div className="info">
								<strong>항목 수</strong> <input type="number" className="ipt_page" value="20" style="width: 30px;">
								<span className="desc">총 1207 중 1- 20</span>
							</div>
						</div> 
						<div className="i_cont">
		<pre><xmp><div className="paginate">
		<button href="#" className="btn_page_prev dis">이전</button>
		<button className="btn_page on">1</button>
		...
		<em>…</em>
		<button className="btn_page">100</button>
		<button href="#" className="btn_page_next">다음</button>
		<div className="info">
			<strong>항목 수</strong>
			<input type="number" className="ipt_page" value="20" style="width: 30px;">
			<span className="desc">총 1207 중 1- 20</span>
		</div>
		</div> 
		</xmp></pre>
						</div>
						<h3>🍉 paging - 직은사이즈 게시판에 사용 됩니다.</h3>
						<span>
							.paginate.type2 ex) div className="paginate type2"
						</span>
						<div className="paginate type2">
							<button href="#" className="btn_page_prev dis">이전</button>
							<button className="btn_page on">1</button>
							<button className="btn_page">2</button>
							<button className="btn_page">3</button>
							<button className="btn_page">4</button>
							<button className="btn_page">5</button>
							<button className="btn_page">96</button>
							<button className="btn_page">97</button>
							<button className="btn_page">98</button>
							<button className="btn_page">99</button>
							<button className="btn_page">100</button>
							<button href="#" className="btn_page_next">다음</button>
						</div> 
		<pre><xmp><div className="paginate type2">
		<button href="#" className="btn_page_prev dis">이전</button>
		<button className="btn_page on">1</button>
		...
		<em>…</em>
		<button className="btn_page">100</button>
		<button href="#" className="btn_page_next">다음</button>
		<div className="info">
			<strong>항목 수</strong>
			<input type="number" className="ipt_page" value="20" style="width: 30px;">
			<span className="desc">총 1207 중 1- 20</span>
		</div>
		</div> 
		</xmp></pre>
					</div>
				</article>
				<article className="i_bx flex" id="i_bx4">
					<div className="left">

					</div>
					<div className="right">

					</div>
				</article>
			 */}
		</>
	);
};

export default Module;