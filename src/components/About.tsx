const About = () => {
	return (
		<div id='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6'>
					<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4'>
						<div className='sm:text-right pb-8 pl-4'>
							<p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
								About me
							</p>
						</div>
					</div>
					<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<div className='sm:text-right text-4xl font-bold'>
							<p>
								Hi, I'm Milad!
							</p>
						</div>
						<div>
							<p>
								I'm currently studying programming at <a className='inline hover:text-blue-400 underline' href='https://hive.fi'>Hive Helsinki</a>, 
								where I've greatly developed my problem solving and teamworking skills.<br /><br />
								Before diving into tech, I worked in customer service and sales, which taught me how to communicate clearly and effectively,
								adapt quickly and stay focused on solving real world problems
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About