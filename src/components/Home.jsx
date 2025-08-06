import heroImg from '../assets/hero.svg';
import ben from '../assets/ben.png';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='min-h-screen bg-white pt-20'>
      <div className='bg-emerald-100 py-24'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8'>
          <article>
            <h1 className='text-7xl font-bold tracking-wider'>I'm Benson</h1>
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
              Website Developer
            </p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
              turning ideas into interactive reality
            </p>
            <div className='flex gap-x-4 mt-4'>
              <a href='https://github.com/The-Ke-Tech?tab=repositories' target='_blank' rel='noopener noreferrer'>
                <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <a href='https://www.linkedin.com/in/benson-owera-28315b350' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
              <a href='https://x.com/BrainDamage256?t=OJcuCG-kE4aj1nWaIAgoXA&s=09' target='_blank' rel='noopener noreferrer'>
                <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
              </a>
            </div>
          </article>
          <article className='hidden md:block'>
            <img src={heroImg} className='h-80 lg:h-96' />
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;