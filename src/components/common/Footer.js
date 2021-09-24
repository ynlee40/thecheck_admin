import React from "react";
import {useSelector} from "react-redux";
import {getLayoutOn} from "features/common/SettingSlice";

const Footer = () => {
	const layoutOn = useSelector(getLayoutOn);
	if(!layoutOn) return "";
	return (
		<footer>
			<span className="copyright">Copyright 2020, The Check Co.Ltd.</span>
		</footer>
	);
};

export default Footer;