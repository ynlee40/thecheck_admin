import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {getTitle, getLayoutOn} from "features/common/SettingSlice";
import {gnbToggle} from "features/common/GnbSlice";

const Header = () => {
	const dispatch = useDispatch(); 
	const layoutOn = useSelector(getLayoutOn);
	const title = useSelector(getTitle);
	if(!layoutOn) return "";
	const date = new Date();
	const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	const today =  date.getFullYear() + "년 "+ (date.getMonth()+1) + "월 " + date.getDate() +"일 "+ week[date.getDay()];
	const openGnb = () => dispatch(gnbToggle(true));
	return (
		<>
			<header>
				<div className="left">
					<button className="btn_menu" onClick={openGnb}>메뉴 버튼</button>
					<h1>{title}</h1>
					<em className="ico_bar"></em>
					<span className="date">{today}</span>
				</div>
				<div className="right"> 
					<button className="btn_add"><span className="blind">추가 버튼</span></button>
					<button className="btn_noti"><em>1</em><span className="blind">알림 버튼</span></button>
					<button className="btn_help"><span className="blind">도움 버튼</span></button>
					<button className="btn_profile"><span>관리자</span><img src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="임시 프로필 사진"/></button>
				</div>
			</header>
		</>
	);
};

export default Header;