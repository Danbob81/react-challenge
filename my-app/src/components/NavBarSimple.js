import React from "react";
import css from "./css/NavBarSimple.module.css";

// always use this constructor:
class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "log in",
        };
    }

    handleClick() {
        this.setState((prevState) => {
            console.log('Previous State:', prevState)
            return{
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log out" ? "log in" : "log out",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default NavBarSimple;