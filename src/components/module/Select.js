import React, {useState} from "react";



const Select = ({title, list, width}) => {
	const slctList = document.getElementsByClassName("slct");
	const [slctTitle, setSlctTitle] = useState(title);
	if(slctTitle === undefined){
		let target = "";
		list.map(item => {
			if (item.on === true) {
				target = item.name;
				return;
			}
		});
		setSlctTitle(target);
	}
	const toggleSlct = (e) => {
		const target = e.target.parentNode;
		const onState = target.classList.contains("on") ? true : false;
		slctList.forEach(item => item.classList.remove("on"));
		if (!onState) target.classList.add("on");
		
	}
	const onClickItem = (e) => {
		const target = e.target;
		const list = target.parentNode.childNodes;
		list.forEach(item => item.classList.remove("select"));
		setSlctTitle(e.target.innerText);
		target.classList.add("select");
		target.parentNode.parentNode.classList.remove("on");
	}

	document.addEventListener("click", e => {
		const temp = e.target.className.split(" ");
		const target = e.target.className !== "" ? slctList[0].querySelector("." + temp[0]) : null;
		if (target === null) slctList.forEach(item => item.classList.remove("on"));
	});
	return (
		<div className={"slct "+ width}>
			<div className="slct_tit" onClick={toggleSlct}>{slctTitle}</div>
			<ul className="slct_cont"> 
				{
					list.map((item, i) => (
						<li className={"slct_li "+( item.on ? "select":"")} key={i} onClick={onClickItem}>{item.name}</li>
					))
				}
			</ul>
		</div>
	);
};

export default Select;