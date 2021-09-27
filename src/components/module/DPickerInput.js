import React,{forwardRef, useState} from 'react';

import DatePicker from "react-datepicker";
import ko from 'date-fns/locale/ko';

const DPickerInput = ({classNm, placeholder}) => {
	const [date, setDate] = useState();
	const ref = React.createRef();
	const CInput = forwardRef(({value, onClick}, ref) => {
		return <button type="button" className="ipt_button" onClick={onClick} ref={ref}>{value==="" ? placeholder : value }</button> 
		// return <input type="text" className="ipt_button" value={value} onClick={onClick} ref={ref} placeholder={placeholder} />
	});
	// const Input =({value, onClick}) => (
	// 	<button type="button" className="ipt_button" onClick={onClick}>{value}</button>
	// );
	return (
		<div className={"datepicker "+ (classNm!==undefined?classNm:"")}>
			{date !== undefined && <button type="button" className="btn_reset" onClick={()=>setDate()}/>}
			<DatePicker selected={date} onChange={(item) => setDate(item)} locale={ko} dateFormat="yyyy-MM-dd" customInput={<CInput ref={ref}/>}/>
		</div>
	);
};

export default DPickerInput;