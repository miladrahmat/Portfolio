import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Fdf from '../assets/fdf.gif'
import cub3d from '../assets/cub3d.gif'
import irc from '../assets/irc.gif'
import minish from '../assets/minishell.gif'
import philo from '../assets/philo.gif'

const projects = [
{
	image: irc,
	title: 'Custom IRC server',
	description: 'An Internet Relay Chat (IRC) server written in C++',
	link: 'https://github.com/miladrahmat/ft_irc',
},
{
	image: cub3d,
	title: 'Raycasting game',
	description: 'Raycasting-based game written in C, inspired by the world-famous Wolfenstein3D',
	link: 'https://github.com/miladrahmat/cub3d',
},
{
	image: minish,
	title: 'UNIX shell',
	description: 'A small UNIX shell written in C, that imitates the behavior of bash',
	link: 'https://github.com/miladrahmat/Minishell',
},
{
	image: philo,
	title: 'The dining philosophers problem simulator',
	description: 'A text-based simulator for the dining philosophers problem',
	link: 'https://github.com/miladrahmat/Minishell',
},
{
	image: Fdf,
	title: '3D Map Visualizer',
	description: 'Wireframe renderer written in C, that converts a 2D map into a 3D representation',
	link: 'https://github.com/miladrahmat/Fdf',
},
];

const Projects = () => {
return (
		<div id="projects" className="w-full min-h-screen text-gray-300 bg-[#0a192f] flex flex-col justify-center">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8 w-full flex justify-center items-center flex-col">
					<p className="sm:text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
						Projects
					</p>
					<p className="py-6 sm:text-2xl">
						Check out my most recent projects
					</p>
				</div>
				<Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={50} slidesPerView={1} className="w-full">
					{projects.map((project, idx) => (
						<SwiperSlide key={idx} className="w-full flex items-center justify-center">
							<div className="flex flex-col md:flex-row items-center justify-center h-full w-full bg-[#112240] rounded-md p-6">
								<div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0 md:mr-8">
									<img src={project.image} alt={project.title} className="object-cover rounded-md max-h-64 w-full md:w-auto" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-center items-start">
									<span className="text-2xl font-bold text-white tracking-wider mb-4">
										{project.title}
									</span>
									<p className="text-lg text-left mb-6">
										{project.description}
										</p>
									<a href={project.link} target="_blank" rel="noopener noreferrer">
										<button className="rounded-lg px-6 py-3 bg-cyan-400 text-gray-900 font-bold text-lg shadow hover:bg-cyan-300 transition-colors">
										View Project
										</button>
									</a>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Projects