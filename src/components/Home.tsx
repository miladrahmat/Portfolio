import { HiArrowNarrowRight } from 'react-icons/hi'
import me from '../assets/MiladRahmat.jpg'
import { Link } from 'react-scroll'

const Home = () => {
	return (
		<div id='home' className='h-screen w-full bg-[#0a192f]'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
				<div className='flex flex-col justify-center w-full h-full'>
					<h2 className='text-4xl sm:text-7xl font-bold text-white'>
						Milad Rahmat Abadi
					</h2>
					<p className='text-white sm:text-3xl py-4 max-w-md'>
						Aspiring software developer
					</p>
					<div>
						<Link to='about' smooth={true} duration={500} className='group text-2xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradiant-to-r from-cyan-500 to-blue-500 cursor-pointer'>
							About Me
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight size={25} className='ml-3' />
							</span>
						</Link>
					</div>
				</div>
				<div>
					<img src={me} alt='My profile image' className='rounded-full mx-auto w-2/3' />
				</div>
			</div>
		</div>
	)
}

export default Home
