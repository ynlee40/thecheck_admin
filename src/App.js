import Routes from "routes/Index";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Alert from "components/popup/Alert";
import Gnb from "components/common/Gnb";
import Summary from "components/common/Summary";


function App() {
	//달력 ipt 세팅
	const dateList = document.getElementsByClassName("react-datepicker-ignore-onclickoutside");
	dateList.forEach(item => item.setAttribute("disabled", "true"))
	return (
		<>
			<Header/>
			<Summary/>
			<Gnb/> 
			<Routes/>
			<Alert/>
			<Footer/>
		</>
	);
}

export default App;
