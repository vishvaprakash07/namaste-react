import React from 'react';

class UserClass extends React.Component {
    
    constructor(props) {
        super(props);
        // console.log("User Class Props",props);
        this.state = {
            userInfo: {
                avatar_url: null,
                name: "Dummy",
                location: "Dummy",
            }
        }

        console.log("child constructor");
    }

    async componentDidMount() {
        console.log("Child componentDidMount");
        const data = await fetch("https://api.github.com/users/vishvaprakash07");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
    };

    componentDidUpdate() {
        console.log("Child componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Child componentWillUnmount");
    }

    render() {
         
        const { avatar_url, name, location } =  this.state.userInfo;;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="User Avatar" />
                <h2>Name: { name }</h2>
                <h3>Location: { location }</h3>
                <h3>Contact: vishvaprakash07@gmail.com</h3>
            </div>
        );
    };


};

export default UserClass;