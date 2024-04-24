import style from "./Header.module.css";
import header_icon from "../../../assets/icons/icon_git.svg";
import Input from "../../forms/Input/Input";

const Header = () => {
	return (
		<div className={style.header}>
			<img src={header_icon} alt="" />
			<Input />
		</div>
	);
};
export default Header;
