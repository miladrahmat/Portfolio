
import {
	FaGithub,
	FaLinkedin,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

const Contact = () => {

	return (
		<div id='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'> 
			<div className='flex flex-col justify-center items-center max-w-[600px] w-full'>
				<div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
					<p className='text-2xl sm:text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>
						Contact
					</p>
					<p className='sm:text-2xl text-gray-300 py-4'>
						Let's connect!
					</p>
				</div>
				<div className='grid grid-cols-3 gap-4'>
					<button onClick={() => window.open("https://github.com/miladrahmat")} className='text-white bg-gradient-to-r from-black-500 to-gray-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg sm:px-5 py-2.5 cursor-pointer' aria-label='GitHub'>
						<FaGithub size={100} />
					</button>
					<button onClick={() => window.open("https://www.linkedin.com/in/miladrahmat/")} className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg sm:px-5 py-2.5 cursor-pointer' aria-label='LinkedIn'>
						<FaLinkedin size={100} />
					</button>
					<button onClick={() => window.open("mailto:milad.rahmat@gmail.com")} className='text-white bg-gradient-to-r from-red-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg sm:px-5 py-2.5 text-center cursor-pointer' aria-label='Email'>
						<MdEmail size={100} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Contact