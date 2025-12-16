
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Project {
	image: string
	title: string
	description: string
	link: string
}

interface ProjectsCarouselProps {
	projects: Project[]
}

const ProjectCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
	return (
		<Swiper 
			modules={[Navigation, Pagination, Keyboard, Mousewheel]}
			navigation
			pagination={{ clickable: true }}
			keyboard={{ enabled: true }}
			mousewheel={{ forceToAxis: true }}
			spaceBetween={10}
			slidesPerView={1}
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
			{projects.map((project, idx) => (
				<SwiperSlide key={idx} className='w-full h-full justify-center'>
					{ ({isActive}) => (
						<div
							className={`flex flex-col justify-center items-center h-[450px] w-full bg-[#112240] rounded-md my-6 p-6
								transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 scale-105 shadow-xl z-10' : 'opacity-40 scale-90 blur-[1px]'}`}
						>
							<div className='w-full justify-center items-center h-1/2 overflow-hidden'>
								<img src={project.image} alt={`Image of ${project.title}`} className='object-cover rounded-md max-h-64 w-full md:w-auto' />
							</div>
							<div className='w-full flex flex-col justify-center items-center p-6 gap-4'>
								<span className='text-xl font-bold text-white tracking-wider text-center'>
									{project.title}
								</span>
								<a href={project.link} target='_blank' rel='noopener noreferrer'>
									<button className={`rounded-lg px-6 py-2 bg-cyan-400 text-gray-900 font-bold text-base shadow hover:bg-cyan-300 transition-colors`}>
										Learn more
									</button>
								</a>
							</div>
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	)
}
export default ProjectCarousel