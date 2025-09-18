
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
		<Swiper modules={[Navigation, Pagination, Keyboard, Mousewheel]} navigation pagination={{ clickable: true }} keyboard={{ enabled: true }} mousewheel={{ forceToAxis: true }} spaceBetween={50} slidesPerView={1} loop={true} className='w-full'>
			{projects.map((project, idx) => (
				<SwiperSlide key={idx} className='w-full flex items-center justify-center'>
					<div className='flex flex-col md:flex-row items-center justify-center h-full w-full bg-[#112240] rounded-md p-6'>
						<div className='w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-8'>
							<img src={project.image} alt={project.title} className='object-cover rounded-md max-h-64 w-full md:w-auto' />
						</div>
						<div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
							<span className='text-2xl font-bold text-white tracking-wider mb-4'>
								{project.title}
							</span>
							<p className='text-lg text-left mb-6'>
								{project.description}
							</p>
							<a href={project.link}>
								<button className='rounded-lg px-6 py-3 bg-cyan-400 text-gray-900 font-bold text-lg shadow hover:bg-cyan-300 transition-colors'>
									View Project
								</button>
							</a>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
export default ProjectCarousel