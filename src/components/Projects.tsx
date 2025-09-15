import Fdf from '../assets/fdf.gif'
import cub3d from '../assets/cub3d.gif'
import irc from '../assets/irc.gif'
import minish from '../assets/minishell.gif'
import philo from '../assets/philo.gif'

const Projects = () => {
	return (
		<div id='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 w-full flex justify-center items-center flex-col'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
						Projects
					</p>
					<p className='py-6 text-2xl'>
						Check out my most recent projects
					</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					<div style={{ backgroundImage: `url(${irc})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#00ffff] group container rounded-md flex justify-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-lg font-bold text-white tracking-wider'>
								Custom IRC server
							</span>
							<p className='text-ceneter'>
								An Internet Relay Chat (IRC) server written in C++
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/miladrahmat/ft_irc'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div style={{ backgroundImage: `url(${cub3d})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#00ffff] group container rounded-md flex justify-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-lg font-bold text-white tracking-wider'>
								Raycasting game
							</span>
							<p className='text-ceneter'>
								Raycasting-based game written in C, inspired by the world-famous Wolfenstein3D
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/miladrahmat/cub3d'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div style={{ backgroundImage: `url(${minish})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#00ffff] group container rounded-md flex justify-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-lg font-bold text-white tracking-wider'>
								UNIX shell
							</span>
							<p className='text-ceneter'>
								A small UNIX shell written in C, that imitates the behavior of bash
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/miladrahmat/Minishell'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div style={{ backgroundImage: `url(${philo})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#00ffff] group container rounded-md flex justify-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-lg font-bold text-white tracking-wider'>
								The dining philosophers problem simulator
							</span>
							<p className='text-ceneter'>
								A text-based simulator for the dining philosophers problem
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/miladrahmat/Minishell'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div style={{ backgroundImage: `url(${Fdf})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className='shadow-lg shadow-[#00ffff] group container rounded-md flex justify-center mx-auto content-div'>
						<div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
							<span className='text-lg font-bold text-white tracking-wider'>
								3D Map Visualizer
							</span>
							<p className='text-ceneter'>
								Wireframe renderer written in C, that converts a 2D map into a 3D representation
							</p>
							<div className='pt-8 text-center'>
								<a href='https://github.com/miladrahmat/Fdf'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects