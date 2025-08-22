import React from 'react';
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {        
    }

    render() {
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