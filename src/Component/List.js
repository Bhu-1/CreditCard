import { Fragment } from "react";
import classes from "./List.module.css";
const List = (props) => {
    const deleteHandler =() => {
        props.onclick(props.id);
    }
    return(
        <Fragment>
            <div className={classes.list}>
            <span>{props.ccNumber}</span>
            <button onClick={deleteHandler}>Delete</button>
            </div>
        </Fragment>
        
    )
}

export default List;