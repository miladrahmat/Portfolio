import { HiArrowNarrowRight } from 'react-icons/hi'
import me from '../assets/MiladRahmat.jpg'
import { Link } from 'react-scroll'

const Home = () => {
	return (
		<div id='home' className='h-screen w-full bg-[#0a192f]'>
			<div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center w-full h-full'>
					<h1 className='text-2xl sm:text-7xl font-bold text-white'>
						Milad Rahmat Abadi
					</h1>
					<h2 className='text-white sm:text-4xl my-2 py-4 max-w-md'>
						Software developer
					</h2>
					<div>
						<Link to='about' smooth={true} duration={500} className='group sm:text-2xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradiant-to-r from-cyan-500 to-blue-500 cursor-pointer'>
							About Me
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight size={25} className='ml-3' />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img src={me} alt='Profile picture' className='rounded-full mx-auto w-2/3' />
				</div>
			</div>
		</div>
	)
}

export default Home
