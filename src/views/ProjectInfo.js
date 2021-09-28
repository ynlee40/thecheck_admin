import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLayoutOn } from "features/common/SettingSlice";
import "scss/nonProject/projectInfo.scss"; 
import Head from "components/common/Head";

const ProjectInfo = () => {
	const dispatch = useDispatch();
	// const location = window.location.href;
	useEffect(()=>{
		dispatch(setLayoutOn(false));
		// if (location.indexOf("projectInfo") > -1) dispatch(setLayoutOn(false)); 
		// return () => dispatch(setLayoutOn(true));
	}, []);
	return (
		<div className="project_info">
			<Head title="Project Info | 더체크"/>
			<h1>더체크 통합관리자</h1>
			<h2 className="txt_red">[구축 전 필독사항]</h2>
			<ul className="desc_ul">
				<li>
					- 스타일명은 <strong>style.css</strong>입니다.<br/>
					배포는 <strong>/dist/css/style.css</strong>로 부탁드립니다<br/>
					css 파일들 중 가장 마지막에 위치시켜주세요.
				</li>
				<li>
					- UI 스크립트는 <strong>ui.js</strong> 입니다. /dist/js 안에 있는 파일들은 사용하는 플러그인들 이니 추가 부탁드립니다.
				</li>
				<li>
					<strong>- style.css, ui.js 파일에 직접 수정하지 말아주세요. 수정이 필요할시 요청 부탁 드립니다.</strong>
				</li>
				<li>
					- 달력 플러그인은 air datepicker을 사용하였습니다.
				</li>
				<li>
					- 해당 프로젝트에서는 이미지를 사용하지 않습니다. 참고 부탁드립니다.
				</li>
				<li>
					- Github Url : <a href="https://github.com/thecheckdev/TheCheck_cms_ui" target="_blank">https://github.com/thecheckdev/TheCheck_cms_ui</a>
				</li>
			</ul>
			{/* <h2 className="txt_red">[업데이트 내용]</h2>
			<ul className="desc_ul">
				<li>
					- 
				</li>
			</ul> */}
			<h2>모듈 & 스타일 가이드</h2>
			<table className="table">
				<colgroup>
					<col/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
				</colgroup>
				<thead>
					<tr>
						<th>Title</th>
						<th>Date</th>
						<th>Modify</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="subj"><a href="/module" target="_blank">모듈 & 스타일 가이드 <em className="new">update</em></a></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<h2>Layout</h2>
			<table className="table">
				<colgroup>
					<col/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
				</colgroup>
				<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Modify</th>
				</tr>
				</thead>
				<tbody>
					<tr>
						<td className="subj"><a href="/layout" target="_blank">Layout</a></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className="subj"><a href="/layoutincentive" target="_blank">인센티브 Layout</a><em className="new">new</em></td>
						<td></td>
						<td>-</td>
					</tr>
					<tr>
						<td className="subj"><a href="/layoutmember" target="_blank">회원 Layout <em className="new">new</em></a></td>
						<td></td>
						<td>-</td>
					</tr>
				</tbody>
			</table>
			<h2>게시판</h2>
			<table className="table">
				<colgroup>
					<col/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
				</colgroup>
				<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Modify</th>
				</tr>
				</thead>
				<tbody>
					<tr>
						<td className="subj"><a href="/board/noti" target="_blank">공지사항</a></td>
						<td>21.08.04</td>
						<td>21.08.09</td>
					</tr>
					<tr>
						<td className="subj"><a href="/board/lab" target="_blank">자료실</a></td>
						<td>21.08.04</td>
						<td>21.08.09</td>
					</tr>
					<tr>
						<td className="subj"><a href="/board/list" target="_blank">전체 게시판</a></td>
						<td>21.08.05</td>
						<td>21.08.09</td>
					</tr>
					<tr>
						<td className="subj"><a href="/board/create" target="_blank">게시글 작성</a></td>
						<td>21.08.05</td>
						<td>-</td>
					</tr>
					<tr>
						<td className="subj"><a href="/board/detail" target="_blank">게시글 상세페이지</a></td>
						<td>21.08.09</td>
						<td>-</td>
					</tr>
				</tbody>
			</table>
			{/* <h2>ETC</h2>
			<table className="table">
				<colgroup>
					<col/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
				</colgroup>
				<thead>
				<tr>
					<th>Title</th>
					<th>Date</th>
					<th>Modify</th>
				</tr>
				</thead>
				<tbody>
					<tr>
						<td className="subj"><a href="/popup" target="_blank">팝업</a> <em className="new">update</em></td>
						<td>21.08.10</td>
						<td>21.08.11</td>
					</tr>
				</tbody>
			</table> */}
		</div>
	);
};
export default ProjectInfo;