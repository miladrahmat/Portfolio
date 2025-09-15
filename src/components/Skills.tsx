
const Skill = ( {text}: {text: string} ) => {
	return (
		<div className='shadow-md shadow-[#00ffff] hover:scale-110 duration-500'>
			<p className='my-4'>
				{text}
			</p>
		</div>
	)
}

const Skills = () => {
	return (
		<div id='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='w-full flex justify-center items-center flex-col mb-7'>
					<p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
						Skills
					</p>
					<p className='py-4 text-2xl'>
						I enjoy diving into and learning new things. Here's a list of technologies I've worked with
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<Skill text='C' />
					<Skill text='C++' />
					<Skill text='JavaScript' />
					<Skill text='TypeScript' />
					<Skill text='React' />
					<Skill text='Git' />
					<Skill text='Bash' />
					<Skill text='Markdown' />
					<Skill text='HTML' />
				</div>
			</div>
		</div>
	)
}

export default Skills