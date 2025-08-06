import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-teal-500 to-blue-500 py-12'>
      <div className='align-element flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-6'>
        <div>
          <h2 className='text-white text-2xl font-bold mb-2'>Connect With Me</h2><hr></hr>
          <div className='flex gap-x-6 mb-6 sm:mb-0 '>
            <a href='https://github.com/The-Ke-Tech?tab=repositories' target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='h-6 w-6 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/benson-owera-28315b350' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='h-6 w-6 hover:text-black duration-300' />
            </a>
            <a href='https://x.com/BrainDamage256?t=OJcuCG-kE4aj1nWaIAgoXA&s=09' target='_blank' rel='noopener noreferrer'>
              <FaTwitterSquare className='h-6 w-6 hover:text-black duration-300' />
            </a>
            
           
            <a href='https://wa.me/254701804627' target='_blank' rel='noopener noreferrer'>
              <FaWhatsapp className='h-6 w-6 text-green-900 hover:text-black duration-300' />
            </a>
          </div>
        </div>
        <p className='text-slate-600 text-sm font-medium'>
          &copy; {new Date().getFullYear()} Benson. All rights reserved.<hr></hr><hr></hr>
          <div className='flex items-center font-bold mb-2 text-white gap-x-8 '>
            <p>contact: +254701804627</p>
            </div>
         
        </p>
      </div>
    </footer>
  );
};

export default Footer;