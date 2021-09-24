import React from 'react';
import {useSelector} from "react-redux";
import {getLayoutOn} from "features/common/SettingSlice";
import {getTitle, getSubTitle, getCInfo, getStep} from "features/common/SummarySlick";

const Summary = () => {
	const layoutOn = useSelector(getLayoutOn);
	const title = useSelector(getTitle);
	const subTitle = useSelector(getSubTitle);
	const cInfo = useSelector(getCInfo);
	const step = useSelector(getStep);
	if(!layoutOn) return "";
	return (
		<section className="summary">
			<div className="left">
				{subTitle !== null && <h2>{subTitle}</h2>}
				{title !== null && <h1>{title}</h1>}
			</div>
			<div className="right">
				{
					cInfo.length > 0 && (
						cInfo.map((item, i) => (
							<div className="unit" key={i}> 
								<strong>{item.name}</strong>
								<span className="desc">{item.desc}</span>
							</div> 
						))
					)
				}
				{
					step.length > 0 && (
						step.map((item, i) => (
							<div className={"step "  + item.state} key={i}>
								{item.num} <span> {item.name}</span>
							</div> 
						))
					)
				}
			</div>
		</section>
	);
};

export default Summary;