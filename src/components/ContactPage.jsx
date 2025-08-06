import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi', hour12: true }),
      year: new Date().getFullYear(),
    };
    console.log('Sending with params:', templateParams);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
          setTimeout(() => setStatus(null), 5000);

          // Send auto-reply after 3 minutes (180,000 milliseconds)
          const autoReplyParams = {
            name: formData.name,
            tittle: formData.tittle,
            email: formData.email, // User's email for the reply
            message: `Hi ${formData.name},\n\nThank you for your message! I’ll get back to you soon regarding your inquiry. Best,\nBenson`,
            time: new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi', hour12: true }),
            year: new Date().getFullYear(),
          };
          setTimeout(() => {
            emailjs
              .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                autoReplyParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
              )
              .then(
                () => console.log('Auto-reply sent successfully'),
                (error) => console.error('Auto-reply error:', error.text)
              );
          }, 180000); // 3 minutes delay
        },
        (error) => {
          setStatus('Failed to send message. Try again.');
          setIsSubmitting(false);
          console.error('EmailJS error:', error.text);
          console.error('EmailJS error:', error);
        }
      );
  };
  

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-emerald-100 py-24">
        <div className="align-element">
          <h1 className="text-5xl font-bold tracking-wider text-center mb-8">Contact Me</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows="5"
                  required
                ></textarea>
                
              </div>
              <button
                type="submit"
                className="bg-teal-500 text-white py-3 px-6 rounded-md hover:bg-teal-600 duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className="text-center text-lg mt-4">{status}</p>}
            </form>
            {/* Contact Info & Social Links */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-700 mb-4">Get in Touch</h2>
              <p className="text-lg text-slate-600 mb-4">
                Feel free to reach out via email, phone, or social media!
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-lg text-slate-600">
                  <span className="font-medium">Phone:</span> +254701804627
                </p>
                <p className="text-lg text-slate-600">
                  <span className="font-medium">Email:</span> your.email@example.com
                </p>
              </div>
              <div className="flex gap-x-6 mt-6">
                <a href="https://github.com/The-Ke-Tech?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/benson-owera-28315b350" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                </a>
                <a href="https://x.com/BrainDamage256?t=OJcuCG-kE4aj1nWaIAgoXA&s=09" target="_blank" rel="noopener noreferrer">
                  <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                </a>
                <a href="https://wa.me/254701804627" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="h-8 w-8 text-green-900 hover:text-black duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;