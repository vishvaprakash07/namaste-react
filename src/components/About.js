import React from 'react';
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent Constructor");
    }

    componentDidMount() {
        console.log("parent ComponentDidMount");

        
    }

    render() {
        console.log("parent Render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is Namaste React Web series.</h2>
                <UserClass name="Vishva (class)" location="Sydney class" />
            </div>
        );
    };
}


export default About;