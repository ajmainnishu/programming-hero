const Contact = () => {
    return (
        <div>
            <h2 className="font-rancho text-[#331A15] text-5xl mb-8 mt-8 lg:mt-0 drop-shadow-lg">Connect with Us</h2>
            <div>
                <input type="text" placeholder="Name" className="input w-full mb-4" />
                <input type="email" placeholder="Email" className="input w-full mb-4" />
                <textarea className="textarea w-full mb-6 resize-none" placeholder="Message" rows='4'></textarea>
                <button className="font-rancho text-[#331A15] text-2xl py-2 px-5 border-2 border-[#331A15] rounded-full">Send Message</button>
            </div>
        </div>
    );
};

export default Contact;