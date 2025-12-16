import ProjectCarousel from './ProjectCarousel'
import Fdf from '../assets/fdf.gif'
import cub3d from '../assets/cub3d.gif'
import irc from '../assets/irc.gif'
import minish from '../assets/minishell.gif'
import philo from '../assets/philo.gif'
import portfolio from '../assets/Porfolio.png'
import inception from '../assets/Inception.png'
import push_swap from '../assets/push_swap.gif'

export const projects = [
	{
		id: 'inception',
		image: inception,
		title: 'Multi-Container WordPress Deployment',
		description: 'A containerized WordPress blog platform with Nginx and MariaDB, orchestrated using Docker Compose',
		stack: [ 'Docker', 'Docker Compose', 'SQL', 'Nginx' ],
		link: 'https://github.com/miladrahmat/Inception',
	},
	{
		id: 'irc',
		image: irc,
		title: 'Custom IRC server',
		description: 'An Internet Relay Chat (IRC) server written in C++',
		stack: [ 'C++' ],
		link: 'https://github.com/miladrahmat/ft_irc',
	},
	{
		id: 'portfolio',
		image: portfolio,
		title: 'Portfolio',
		description: 'Personal portfolio page implemented in TypeScript, React and Tailwind CSS',
		stack: [ 'TypeScript', 'React', 'Tailwind CSS' ],
		link: 'https://github.com/miladrahmat/Portfolio',
	},
	{
		id: 'cub3d',
		image: cub3d,
		title: 'Raycasting game',
		description: 'Raycasting-based game written in C, inspired by the world-famous Wolfenstein3D',
		stack: [ 'C Graphics' ],
		link: 'https://github.com/miladrahmat/cub3d',
	},
	{
		id: 'minishell',
		image: minish,
		title: 'UNIX shell',
		description: 'A small UNIX shell written in C, that imitates the behavior of bash',
		stack: [ 'C', 'UNIX' ],
		link: 'https://github.com/miladrahmat/Minishell',
	},
	{
		id: 'philosophers',
		image: philo,
		title: 'The dining philosophers problem simulator',
		description: 'A text-based simulator for the dining philosophers problem',
		stack: [ 'C' ],
		link: 'https://github.com/miladrahmat/Philosophers',
	},
	{
		id: 'fdf',
		image: Fdf,
		title: '3D Map Visualizer',
		description: 'Wireframe renderer written in C, that converts a 2D map into a 3D representation',
		stack: [ 'C Graphics' ],
		link: 'https://github.com/miladrahmat/Fdf',
	},
	{
		id: 'push-swap',
		image: push_swap,
		title: 'Number sorting algorithm',
		description: 'A C program that sorts integers from input arguments',
		stack: [ 'C' ],
		link: 'https://github.com/miladrahmat/push_swap',
	},
]

const Projects = () => {
return (
		<div role='Projects' id='projects' className='w-full py-10 min-h-screen text-gray-300 bg-[#0a192f] flex flex-col justify-center'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<h2 className='text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						Projects
					</h2>
					<h3 className='py-6 sm:text-2xl'>
						Check out my most recent projects
					</h3>
				</div>
				<ProjectCarousel />
			</div>
		</div>
	);
};

export default Projects