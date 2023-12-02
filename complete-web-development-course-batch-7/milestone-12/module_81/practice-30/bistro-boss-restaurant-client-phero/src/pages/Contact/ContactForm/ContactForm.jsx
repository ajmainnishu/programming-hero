import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import { FaTelegramPlane } from 'react-icons/fa';
import captchaImg from '../../../assets/images/contact/form/captcha.png';

const ContactForm = () => {
    return (
        <div className="space-y-11">
            {/* section title */}
            <SectionTitle title={'CONTACT FORM'} subTitle={'Send Us a Message'}></SectionTitle>
            <div>
                <form className="px-10 md:px-[88px] pt-12 md:pt-[88px] pb-16 bg-[#F3F3F3]">
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* name */}
                            <div className="form-control w-full">
                                <label className="label ps-0">
                                    <span className="text-[#444444] font-semibold text-xl">Name*</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered rounded w-full" />
                            </div>
                            {/* email */}
                            <div className="form-control w-full">
                                <label className="label ps-0">
                                    <span className="text-[#444444] font-semibold text-xl">Email*</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered rounded w-full" />
                            </div>
                        </div>
                        {/* phone */}
                        <div className="form-control w-full">
                            <label className="label ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Phone*</span>
                            </label>
                            <input type="number" placeholder="Enter your name" className="input input-bordered rounded w-full" />
                        </div>
                        {/* message */}
                        <div className="form-control w-full">
                            <label className="label ps-0">
                                <span className="text-[#444444] font-semibold text-xl">Message*</span>
                            </label>
                            <textarea className="textarea textarea-bordered rounded resize-none" placeholder="Write your message here" rows={10} ></textarea>
                        </div>
                    </div>
                    {/* captcha */}
                    <img src={captchaImg} alt="captcha img" className="mt-9" />
                    {/* button */}
                    <div className="text-center">
                        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] capitalize text-xl font-bold text-white rounded border-none mt-20 md:mt-36">Send Message <FaTelegramPlane /></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;