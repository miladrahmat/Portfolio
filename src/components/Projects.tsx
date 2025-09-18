import ProjectCarousel from './ProjectCarousel'
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
		link: 'https://github.com/miladrahmat/Philosophers',
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
		<div aria-label='Projects' id='projects' className='w-full py-10 min-h-screen text-gray-300 bg-[#0a192f] flex flex-col justify-center'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<h2 className='text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						Projects
					</h2>
					<h3 className='py-6 sm:text-2xl'>
						Check out my most recent projects
					</h3>
				</div>
				<ProjectCarousel projects={projects} />
			</div>
		</div>
	);
};

export default Projects