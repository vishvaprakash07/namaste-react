import React from 'react';

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        console.log("User Class Props",props);
        this.state = {
            count: 0,
        }
    }

    render() {
        const { name, location } =  this.props;
        const { count } = this.state;

        return (
            <div className="user-card">
                <h1>Count: { count }</h1>
                <h2>Name: { name }</h2>
                <h3>Location: { location }</h3>
                <h3>Contact: vishvaprakash07@gmail.com</h3>
            </div>
        );
    };


};

export default UserClass;