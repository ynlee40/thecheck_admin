import {Route, Switch} from "react-router-dom";
import {useDispatch} from "react-redux";
import Layout from "views/layout/Layout";
import LayoutIncentive from "views/layout/LayoutIncentive";
import LayoutMember from "views/layout/LayoutMember";
import ProjectInfo from "views/ProjectInfo";
import Module from "views/Module";
import List from "views/board/List";
import Noti from "views/board/Noti";
import Lab from "views/board/Lab";
import Create from "views/board/Create";
import { toggleAlert } from "features/common/AlertSlice";
// import NotFound from "views/NotFound";

const Routes = () => {
	const dispatch = useDispatch(); 
	const onAlert = () => {
		dispatch(toggleAlert({
			html : "<p>링크를 잘못 입력하셨거나<br/>페이지가 삭제/이동 되었을 수 있습니다.</p>",
			toMain : true, 
		}));
	};
	return (
		<Switch>
			<Route path="/" component={ProjectInfo} exact={true}/>
			<Route path="/projectInfo" component={ProjectInfo}/>
			<Route path="/module" component={Module}/>
			<Route path="/layout" component={Layout}/>
			<Route path="/layoutincentive" component={LayoutIncentive}/>
			<Route path="/layoutmember" component={LayoutMember}/>
			<Route path="/board/list" component={List}/>
			<Route path="/board/noti" component={Noti}/>
			<Route path="/board/lab" component={Lab}/>
			<Route path="/board/create" component={Create}/>
			<Route path="/*" render={onAlert}/>
		</Switch>
	);
};

export default Routes;