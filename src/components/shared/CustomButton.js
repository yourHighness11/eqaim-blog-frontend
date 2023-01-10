import { Fab } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButtom = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <Fab
          color="primary"
          aria-label="add"
          style={props.style}
          onClick={props.onClick}
        >
          {props.buttonIcon}
        </Fab>
      </Link>
    </div>
  );
};

export default CustomButtom;
