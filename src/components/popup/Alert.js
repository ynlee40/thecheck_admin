import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAlert, getAlert } from "features/common/AlertSlice";
import {useHistory} from "react-router-dom";

const Alert =  () => {
	const dispatch = useDispatch(); 
	const history = useHistory();
	const data =  useSelector(getAlert);
	const onClose = () => {
		dispatch(toggleAlert());
		if (data.toMain) history.push("/");
	}
	return (
		<div className={"wrap_pop " + (data.on ? "show" : "")}>
			<div className="bx_pop alert"> 
				<div className="cont" dangerouslySetInnerHTML={{ __html: data.html }}>
					{/* <h4>배정이 완료되었습니다.</h4>
					<p className="txt_point">알림창입니다.</p>
					<p><strong>내용을</strong> 입력해주세요</p>
					<p><span className="txt_red">내용을</span> 입력해주세요</p> */}
				</div>
				<div className="bx_btn">
					<button type="button" className="btn fill" onClick={onClose}>확인</button>
					
				</div>
			</div>
		</div>
	);
};

export default Alert;