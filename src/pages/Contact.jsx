import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import HotelMap from '../components/Map';

const ContactUs = () => {
    return (
        <section className="">
            <div
                className="hero"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/6NXD6KS/okay4q85.png')`,
                }}
                >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl py-4 md:py-8">
                    <h2 className="my-5 text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6 lg:px-16 mb-6 py-12">

                <div className="flex flex-col-reverse lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <form className="bg-bgStart shadow-lg rounded-lg p-6 space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textPrimary">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textPrimary">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-textPrimary">Message</span>
                                </label>
                                <textarea
                                    placeholder="Type your message here..."
                                    className="textarea textarea-bordered w-full"
                                ></textarea>
                            </div>
                            <button className="btn btn-primary w-full bg-gradient-to-r from-primary to-secondary text-white">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textPrimary">Call Us</h4>
                                <p className="text-textPrimary/70">+1-234-567-890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textPrimary">Email Us</h4>
                                <p className="text-textPrimary/70">support@luxeory.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-textPrimary">Visit Us</h4>
                                <p className="text-textPrimary/70">123 Luxury Lane, Beverly Hills, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HotelMap/>
        </section>
    );
};

export default ContactUs;
