import { useState } from 'react';
import { useEffect } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll'

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	useEffect(() => {
		if (nav) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [nav])

	return (
		<div className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-100'>
			<div>
				<h1 className='text-2xl'>Milad Rahmat Abadi</h1>
			</div>
			<ul aria-label='Navigation' className='hidden md:flex gap-x-8'>
				<li aria-label='Home'>
					<Link to='home' smooth={true} duration={500} className='cursor-pointer'>
						Home
					</Link>
				</li>
				<li aria-label='About me'>
					<Link to='about' smooth={true} duration={500} className='cursor-pointer'>
						About me
					</Link>
				</li>
				<li aria-label='Projects'>
					<Link to='projects' smooth={true} duration={500} className='cursor-pointer'>
						Projects
					</Link>
				</li>
				<li aria-label='Skills'>
					<Link to='skills' smooth={true} duration={500} className='cursor-pointer'>
						Skills
					</Link>
				</li>
				<li aria-label='Contact'>
					<Link to='contact' smooth={true} duration={500} className='cursor-pointer'>
						Contact
					</Link>
				</li>
			</ul>
			<div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
				{!nav ? <FaBars size={20} aria-label='Menu' /> : <FaTimes size={20} aria-label='Close menu' />}
			</div>
			<ul aria-label='Navigation' className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
				<li aria-label='Home' className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500} className='cursor-pointer'>
						Home
					</Link>
				</li>
				<li aria-label='About me' className='py-6 text-4xl'>
					<Link onClick={handleClick} to='about' smooth={true} duration={500} className='cursor-pointer'>
						About me
					</Link>
				</li>
				<li aria-label='Projects' className='py-6 text-4xl'>
					<Link onClick={handleClick} to='projects' smooth={true} duration={500} className='cursor-pointer'>
						Projects
					</Link>
				</li>
				<li aria-label='Skills' className='py-6 text-4xl'>
					<Link onClick={handleClick} to='skills' smooth={true} duration={500} className='cursor-pointer'>
						Skills
					</Link>
				</li>
				<li aria-label='Contact' className='py-6 text-4xl'>
					<Link onClick={handleClick} to='contact' smooth={true} duration={500} className='cursor-pointer'>
						Contact
					</Link>
				</li>
			</ul>
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul aria-label='Contacting platforms'>
					<li aria-label='LinkedIn' className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a href='https://www.linkedin.com/in/miladrahmat/' className='flex justify-between items-center w-full text-gray-300 px-4'>
						LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li aria-label='GitHub' className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
						<a href='https://github.com/miladrahmat' className='flex justify-between items-center w-full text-gray-300 px-4'>
						GitHub <FaGithub size={30} />
						</a>
					</li>
					<li aria-label='Email' className='w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
						<a href='mailto:milad.rahmat@gmail.com' className='flex justify-between items-center w-full text-gray-300 px-4'>
						Email <MdEmail size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;