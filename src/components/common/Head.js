import React from "react";
import { Helmet } from "react-helmet";

const Head = ({title, desc}) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={desc !== undefined ? desc : "더체크 통합관리자 입니다."} data-react-helmet="true"/> 
		</Helmet>
	);
};

export default Head;