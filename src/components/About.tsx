const About = () => {
	return (
		<div aria-label='About me' id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6'>
						<div className='sm:text-center pb-8 pl-4'>
							<h2 className='text-2xl sm:text-4xl font-bold inline border-b-4 border-cyan-500'>
								About me
							</h2>
						</div>
					<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<div className='sm:text-right sm:text-4xl font-bold'>
							<h3>
								Hi, I'm Milad!
							</h3>
						</div>
						<div className='sm:text-2xl'>
							<p aria-label='Introduction'>
								I'm currently finishing up my studies at <a className='inline hover:text-blue-400 underline' href='https://www.hive.fi' target='_blank' rel='noopener noreferrer'>
								Hive Helsinki</a>, where I've greatly developed my technical skills and soft skills such as problem solving and teamworking.<br /><br />
								Before diving into tech, I worked in customer service and sales, which taught me how to communicate clearly and effectively,
								adapt quickly and stay focused on solving real world problems.<br /><br />
								I enjoy learning new technologies and improving my skills which I can use for creating scalable and efficient solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About