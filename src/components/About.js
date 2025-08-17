import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web series.</h2>
            <User name="Vishva (functional)" location="Sydney functional"/>
            <UserClass name="Vishva (class)" location="Sydney class" />
            
        </div>

        
    );
};

export default About;