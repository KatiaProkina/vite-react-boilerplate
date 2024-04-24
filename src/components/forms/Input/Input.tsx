import icon from "../../../assets/icons/icon_search.svg";
import style from "./Input.module.css";
const Input = () => {
	return (
		<div>
			<form action="submit" className={style.form_container}>
				<img src={icon} alt="" className={style.search_icon} />
				<input type="text" className={style.input} />
			</form>
		</div>
	);
};

export default Input;
