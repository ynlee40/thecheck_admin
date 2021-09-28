import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "features/common/SettingSlice";
import {setSummary} from "features/common/SummarySlick";
import {setPage} from "features/common/PaginateSlice";
import {Link} from "react-router-dom";
import Head from "components/common/Head";
import Select from "components/module/Select";
import DPickerInput from "components/module/DPickerInput";

const Create = () => {
	const dispatch = useDispatch();
	useEffect(()=>{
		window.document.getElementsByTagName("body")[0].className = "p_board";
		dispatch(setTitle("THE CHECK 게시판")); // header 제목
		dispatch(setSummary({
			title:"게시글 작성"
		})); 
		dispatch(setPage({
			type:"type2",
			info:"false"
		})); 
	}, []);
	return (
		<section className="container">
			<Head title="게시글 작성 | 더체크"/>
			<div className="tab">
				<Link to="#" className="t_menu">전체</Link>
				<Link to="#" className="t_menu">공지사항</Link>
				<Link to="#" className="t_menu">업데이트</Link>
				<Link to="#" className="t_menu">자유게시판</Link>
				<Link to="#" className="t_menu on">자료실</Link>
			</div>
			<article className="wrap_boad">
				<table className="tbl_create">
					<tbody>
						<tr>
							<th>종류</th>
							<td>
								<Select list={[
									{name: "공지사항"},
									{name: "업데이트"},
									{name: "자유게시판"},
									{name: "자료실"},
								]} />
							</td>
						</tr>
						<tr>
							<th>제목</th>
							<td><input type="text" className="big"/></td>
						</tr>
						<tr>
							<th>파일 첨부</th>
							<td>
								<div className="bx_file">
									<div className="area">
										<div className="unit">
											<div className="bx_chk white"><input type="checkbox" name="" id="chk1"/><label className="chk" htmlFor="chk1">더체크.zip</label></div>
										</div>
										<div className="unit">
											<div className="bx_chk white"><input type="checkbox" name="" id="chk2"/><label className="chk" htmlFor="chk2">index.html</label></div>
										</div>
									</div>
									<div className="bx_btn">
										<button className="btn">삭제</button>
										<input type="file" multiple id="file"/><label htmlFor="file" className="btn fill">파일추가</label>
									</div>
								</div>
							</td>
						</tr>
						<tr className="tr_cont">
							<th>내용</th>
							<td>
								<textarea name="" id=""></textarea>
							</td>
						</tr>
						<tr>
							<th>마감일 설정</th>
							<td>
								<input type="text" autoComplete='off' readOnly className="ipt_date big ico_calendar"/>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="tbl_create">
					<tbody>
						<tr>
							<th>종류</th>
							<td colSpan="3">
								<Select list={[
									{name: "공지사항"},
									{name: "업데이트"},
									{name: "자유게시판"},
									{name: "자료실"},
								]} />
							</td>
						</tr>
						<tr>
							<th>제목</th>
							<td colSpan="3"><input type="text" className="big"/></td>
						</tr>
						<tr>
							<th>노출 상태</th>
							<td>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio3"/><label className="radio" htmlFor="radio3">노출</label></div>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio4"/><label className="radio" htmlFor="radio4">미노출</label></div>
							</td>
							<th>노출 시간</th>
							<td>
								<Select list={[
									{name: "공지사항"},
									{name: "업데이트"},
									{name: "자유게시판"},
									{name: "자료실"},
								]} />
							</td>
						</tr>
						<tr>
							<th>노출타입</th>
							<td>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio1"/><label className="radio" htmlFor="radio1">일반</label></div>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio2"/><label className="radio" htmlFor="radio2">중요</label></div>
							</td>
							<th>노출 시간</th>
							<td>
								<Select classNm="half" list={[
									{name: "공지사항"},
									{name: "업데이트"},
									{name: "자유게시판"},
									{name: "자료실"},
								]} />
								<Select classNm="half" list={[
									{name: "작성자"},
									{name: "제목"},
									{name: "내용"},
									{name: "제목+내용"},
								]} />
							</td>
						</tr>
						<tr>
							<th>노출타입</th>
							<td>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio5"/><label className="radio" htmlFor="radio5">타입1</label></div>
								<div className="bx_radio white"><input type="radio" name="radio" id="radio6"/><label className="radio" htmlFor="radio6">타입2</label></div>
							</td>
							<th>노출 시간</th>
							<td>
								<input type="text" className="big half"/>
								<input type="text" className="big half"/>
							</td>
						</tr>
						<tr>
							<th>파일 첨부</th>
							<td colSpan="3">
								<div className="bx_file">
									<div className="area nodata">
										<label htmlFor="file">파일을 추가해주세요.</label>
									</div>
									<div className="bx_btn">
										<button className="btn">삭제</button>
										<input type="file" multiple id="file"/><label htmlFor="file" className="btn fill">파일추가</label>
									</div>
								</div>
							</td>
						</tr>
						<tr className="tr_cont">
							<th>내용</th>
							<td colSpan="3">
								<textarea name="" id=""></textarea>
							</td>
						</tr>
						<tr>
							<th>마감일 설정</th>
							<td colSpan="3">
								<DPickerInput classNm="ico"/>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="bx_btn">
					<button className="btn">삭제</button>
					<button className="btn">수정</button>
					<button className="btn fill">등록</button>
				</div>
			</article>
		</section>
	);
};

export default Create;