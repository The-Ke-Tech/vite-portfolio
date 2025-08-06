
import bena from '../assets/bena.png';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-gradient-to-r from-emerald-50 to-teal-50 py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img
          src={bena}
          className='h-64 w-64 md:h-80 md:w-80 rounded-full object-cover border-4 border-emerald-200 shadow-md hover:shadow-lg transition-shadow duration-300'
          alt='Benson'
        />
        <article>
          <SectionTitle text='About Me' className='text-emerald-600 text-4xl font-bold' />
          <p className='text-slate-700 mt-8 leading-loose'>
            I’m Benson, a dedicated IT student at Kaimosi Friends University, passionate about crafting user-focused websites for both personal and commercial purposes. With expertise in front-end and back-end development using modern tools like React, JavaScript, and Tailwind CSS, I create responsive, intuitive web applications tailored to client needs. I also excel in designing professional assets, including portfolios, posters, and business cards, leveraging the latest design tools. Committed to problem-solving, adaptability, and collaboration, I’m eager to partner with individuals or organizations to deliver innovative, real-world solutions that prioritize customer satisfaction. Let’s build modern, impactful applications together!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;