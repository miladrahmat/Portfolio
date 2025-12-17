import ProjectCarousel from './ProjectCarousel'

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