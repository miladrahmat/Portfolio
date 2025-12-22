
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { projects } from '../projects/projects.json'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface IProject {
	id: string
	image: string
	title: string
	description: string
	stack: string[]
	link: string
}

const ProjectCarousel = () => {
	const [initialIndex] = useState(() => {
		const saved = sessionStorage.getItem('swiperProjectIndex')
		return saved ? parseInt(saved, 10) : 0
	})

	return (
		<Swiper 
			modules={[Navigation, Pagination, Keyboard, Mousewheel]}
			navigation
			pagination={{ clickable: true }}
			keyboard={{ enabled: true }}
			mousewheel={{ forceToAxis: true }}
			spaceBetween={10}
			slidesPerView={1}
			initialSlide={initialIndex}
			onSlideChange={(swiper) => {
				sessionStorage.setItem('swiperProjectIndex', swiper.realIndex.toString())
			}}
			breakpoints={{
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}}
			loop={true}
			centeredSlides={true}
			className='w-full h-full'
		>
			{projects.map((project: IProject, idx: number) => (
				<SwiperSlide key={idx} className='w-full h-full justify-center'>
					{ ({isActive}) => (
						<div
							className={`flex flex-col justify-center items-center h-[450px] w-full bg-[#112240] rounded-md my-6 p-6
								transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 scale-105 shadow-xl z-10' : 'opacity-40 scale-90 blur-[1px]'}`}
						>
							<div className='w-full justify-center items-center h-1/2 overflow-hidden'>
								<img src={project.image} alt={`Image of ${project.title}`} className='object-cover rounded-md max-h-64 w-full md:w-auto' />
							</div>
							<div className='w-full flex flex-row justify-start items-start'>
								{project.stack.map((tech, index) => (
									<p key={index} className='border-1 m-0.5 p-1.5 rounded-2xl border-cyan-400 text-cyan-400 text-xs'>
										{tech}
									</p>
								))}
							</div>
							<div className='w-full flex flex-col justify-center items-center p-6 gap-4'>
								<span className='text-xl font-bold text-white tracking-wider text-center'>
									{project.title}
								</span>
								<Link to={`/projects/${project.id}`} aria-label={`Read more about ${project.title}`}>
									<button className={`rounded-lg px-6 py-2 bg-cyan-400 text-gray-900 font-bold text-base hover:bg-cyan-300 transition-colors`}>
										Learn more
									</button>
								</Link>
							</div>
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	)
}
export default ProjectCarousel