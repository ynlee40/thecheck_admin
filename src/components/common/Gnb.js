import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { getGnbBoolean, gnbToggle, getMenu} from "features/common/GnbSlice";
import GnbItem from "components/common/GnbItem";
import {getLayoutOn} from "features/common/SettingSlice";

const Gnb = () => {
	const layoutOn = useSelector(getLayoutOn);
	const dispatch = useDispatch(); 
	const gnbBoolean = useSelector(getGnbBoolean);
	const menu = useSelector(getMenu);
	if(!layoutOn) return "";
	return (
		<nav className={"wrap_gnb" + (gnbBoolean ? " show": "")}> 
			<button type="button" className="btn_close" onClick={()=>dispatch(gnbToggle(false))}>닫기</button>
			<div className="gnb">
				{
					menu.map((item, i) => (
						<GnbItem id={i} key={i} menu={item} />
					))
				}
			</div>
		</nav> 
	);
};

export default Gnb;