import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-6 lg:px-16">
                <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Get In Touch
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                    We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                </p>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <form className="bg-bgStart shadow-lg rounded-lg p-6 space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Your Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Email Address</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-700 dark:text-gray-300">Message</span>
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
                                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Call Us</h4>
                                <p className="text-gray-600 dark:text-gray-400">+1-234-567-890</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Email Us</h4>
                                <p className="text-gray-600 dark:text-gray-400">support@luxeory.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-800 dark:text-white">Visit Us</h4>
                                <p className="text-gray-600 dark:text-gray-400">123 Luxury Lane, Beverly Hills, CA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
