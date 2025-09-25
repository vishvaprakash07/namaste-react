const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="border border-gray-300 p-2 m-2" />
                <br />
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 m-2" />
                <br />
                <textarea placeholder="Your message" className="border border-gray-300 p-2 m-2"></textarea>
                <br />
                <button type="submit" className="bg-blue-500 rounded-lg text-white p-2 m-2">Submit</button>
            </form>
            <h2>Contact us for support</h2>
            <h3>Email: vishvaprakash07@gmail.com</h3>
        </div>
    );
};

export default Contact;