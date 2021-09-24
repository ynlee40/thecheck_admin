import React from "react";
import { useDispatch} from "react-redux";
import { menuToggle } from "features/common/GnbSlice";
import { Link } from "react-router-dom";

const GnbItem = ({id, menu}) => {
	const dep2 = menu.dep2;
	const dispatch = useDispatch(); 
	return (
		<div className="unit">
			{
				dep2 !== null ? 
				<>
					<span className={"menu ico " + menu.on} onClick={()=>dispatch(menuToggle(id))}>{menu.name}</span>
					<div className="dep2">
					{
						dep2 !== null && dep2.map((item, i) => (
							<Link to={item.link} key={i} className="menu_dep2">{item.name}</Link>
						))
					}
					</div>
				</>
				: <Link to={menu.link} className="menu">{menu.name}</Link> 
			}
		</div>
	);
};

export default GnbItem;