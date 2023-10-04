import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Footer.css'
import { FaFacebookF, FaTwitter, FaPinterest, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-black'>
            <Container className='text-white py-3'>
                <div className='row row-cols-2 py-5'>
                    <div>
                        <p className='text-uppercase'>Stay Tuned with CozyStay</p>
                        <h2 className='fs-1'>Sign up for our newsletter to receive our news, deals and special offers.</h2>
                    </div>
                    <div className='pt-5'>
                        <input type="email" className='w-100 text-white bg-transparent py-2 footer-input' name="" id="" placeholder='Your Email Address' />
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="my-3 text-light">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`I agree to the Privacy Policy`}
                                />

                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <hr />
            <Container className='text-white pt-4 pb-5'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <p className='m-0'><small>© Copyright CozyStay inspired by ThemeForest</small></p>
                    </div>
                    <div className='d-flex gap-3'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaYoutube />
                        <FaInstagram />
                    </div>
                    <div className='d-flex gap-3'>
                        <p className='m-0'>PRIVACY</p>
                        <p className='m-0'>TERMS OF USE</p>
                        <p className='m-0'>POLICY</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;