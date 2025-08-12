import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, X, CheckCircle, AlertCircle } from 'lucide-react';
import CardMe from '@/components/ui/cardme';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Modal = ({ isOpen, onClose, type = 'success', title, message }) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md z-50 border border-gray-700 transform transition-all duration-300 scale-100">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              {type === 'success' ? (
                <CheckCircle className="text-green-400 w-6 h-6" />
              ) : (
                <AlertCircle className="text-red-400 w-6 h-6" />
              )}
              <h2 className="text-xl font-semibold text-white">{title}</h2>
            </div>
            <Button
              onClick={onClose}
              className="text-gray-400 hover:text-white bg-transparent border-none p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-gray-300 mb-6">{message}</p>
          <Button
            onClick={onClose}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

const ContactForm = ({ contactData }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState({ type: 'success', title: '', message: '' });

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, url: 'https://github.com/IsoDevMate', label: 'GitHub', color: 'hover:text-purple-400' },
        { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/barack-ouma-b37089212', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/BarackOuma7', label: 'Twitter', color: 'hover:text-cyan-400' },
    ];

    const validateForm = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;

        if (!formData.firstName.trim()) {
            errors.firstName = "First name is required";
        } else if (!nameRegex.test(formData.firstName)) {
            errors.firstName = "First name should only contain letters";
        }

        if (!formData.lastName.trim()) {
            errors.lastName = "Last name is required";
        } else if (!nameRegex.test(formData.lastName)) {
            errors.lastName = "Last name should only contain letters";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            errors.email = "Invalid email format";
        }

        if (formData.phone && !phoneRegex.test(formData.phone)) {
            errors.phone = "Invalid phone number format";
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            errors.message = "Message should be at least 10 characters";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            // Replace with your actual API endpoint
            const response = await fetch('http://localhost:3001/support-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setFormData({
                    firstName: '', lastName: '', email: '', subject: '', message: '', phone: ''
                });
                setModalConfig({
                    type: 'success',
                    title: 'Message Sent Successfully!',
                    message: 'Thank you for reaching out! I\'ll get back to you within 24 hours.'
                });
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setModalConfig({
                type: 'error',
                title: 'Error Sending Message',
                message: 'Something went wrong. Please try again or contact me directly via email.'
            });
        } finally {
            setIsLoading(false);
            setShowModal(true);
        }
    };

    return (
        <>
            <CardMe title="Let's Connect">
                <div className="space-y-6">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                        <p className="text-gray-300 text-sm">
                            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center">
                                    <Mail className="w-4 h-4 text-amber-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Email</p>
                                    <a
                                        href={`mailto:${contactData?.email || 'oumaduor5827@gmail.com'}`}
                                        className="text-sm text-white hover:text-amber-400 transition-colors"
                                    >
                                        {contactData?.email || 'oumaduor5827@gmail.com'}
                                    </a>
                                </div>
                            </div>

                            {contactData?.phone && (
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Phone</p>
                                        <a
                                            href={`tel:${contactData.phone}`}
                                            className="text-sm text-white hover:text-amber-400 transition-colors"
                                        >
                                            {contactData.phone}
                                        </a>
                                    </div>
                                </div>
                            )}

                            {contactData?.location && (
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-500/10 rounded-full flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Location</p>
                                        <p className="text-sm text-white">{contactData.location}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <p className="text-xs text-gray-400 mb-3">Connect with me</p>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 transition-all duration-200 transform hover:scale-110 ${link.color}`}
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="border-t border-gray-700 pt-6">
                        <h4 className="text-white font-medium mb-4">Send Message</h4>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                    />
                                    {formErrors.firstName && (
                                        <p className="text-red-400 text-xs mt-1">{formErrors.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                    />
                                    {formErrors.lastName && (
                                        <p className="text-red-400 text-xs mt-1">{formErrors.lastName}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                />
                                {formErrors.email && (
                                    <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number (optional)"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                />
                                {formErrors.phone && (
                                    <p className="text-red-400 text-xs mt-1">{formErrors.phone}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                />
                                {formErrors.subject && (
                                    <p className="text-red-400 text-xs mt-1">{formErrors.subject}</p>
                                )}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                />
                                {formErrors.message && (
                                    <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-amber-500 hover:bg-amber-600 text-black flex items-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </CardMe>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                type={modalConfig.type}
                title={modalConfig.title}
                message={modalConfig.message}
            />
        </>
    );
}

export default ContactForm;
