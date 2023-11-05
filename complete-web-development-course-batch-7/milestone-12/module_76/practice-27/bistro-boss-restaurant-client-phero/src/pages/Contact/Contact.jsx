import { Helmet } from "react-helmet-async";
import ContactBanner from "./ContactBanner/ContactBanner";
import ContactLocation from "./ContactLocation/ContactLocation";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="mb-20 md:mb-32 lg:mb-[714px]">
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>
            <ContactBanner></ContactBanner>
            <div className="w-10/12 lg:w-9/12 mx-auto space-y-32 mt-20 md:mt-32">
                <ContactLocation></ContactLocation>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;