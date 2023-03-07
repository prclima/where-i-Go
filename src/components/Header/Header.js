import { Autocomplete } from "@react-google-maps/api";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1> Travel Advisor </h1>

      <div className={style.searchBar}>
        <p>Econtre novos lugares</p>
        <input />
      </div>
    </div>
  );
}

export default Header;
