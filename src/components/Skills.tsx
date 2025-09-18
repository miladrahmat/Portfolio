
const Skill = ( {text}: {text: string} ) => {
	return (
		<div className='shadow-md shadow-[#00ffff]'>
			<h4 className='font-bold text-2xl my-4'>
				{text}
			</h4>
		</div>
	)
}

const Skills = () => {
	return (
		<div role='Skills' id='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='w-full flex justify-center items-center flex-col mb-7'>
					<h2 className='text-2xl sm:text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
						Skills
					</h2>
					<h3 className='py-4 sm:text-2xl'>
						I enjoy diving into and learning new things. Here's a list of technologies I've worked with
					</h3>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
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