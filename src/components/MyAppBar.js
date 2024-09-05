// src/components/MyAppBar.js
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function MyAppBar() {
  return (
    <div className="appBarContainer">
      <div className="titleContainer">
        <p className="bebas-neue-regular">SHOPPING WEBSITE</p>
      </div>
      <div className="cartContainer">
        <Link to="/CartPage">
          <ShoppingCartOutlinedIcon
            style={{ color: "black", fontSize: "3em" }}
          />
        </Link>
      </div>
    </div>
  );
}
