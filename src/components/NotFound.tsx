import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<main className='h-screen w-full bg-[#0a192f] flex items-center justify-center'>
			<div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-center'>
				<h2 className='text-9xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>
					404
				</h2>
				<h3 className='text-4xl sm:text-5xl font-bold text-white mt-4 mb-2'>
					Page Not Found
				</h3>
				<p className='text-gray-400 text-lg sm:text-xl max-w-md mb-8'>
					Sorry, the page you're looking for doesn't exist.
				</p>
				<button
					onClick={() => navigate('/')}
					className='group text-lg sm:text-xl text-white px-8 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:from-cyan-600 hover:to-blue-600 transition-all duration-300'
				>
					Back to Home
				</button>
			</div>
		</main>
	)
}

export default NotFound
