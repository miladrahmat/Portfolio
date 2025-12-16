import { useParams, useNavigate } from 'react-router-dom'
import { projects } from './Projects'

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) return <div>404 Not Found</div>;

  return (
    <div role='Project Details Page' className='w-full min-h-screen bg-[#0a192f] text-white flex flex-col items-center p-10'>
      <button onClick={() => navigate(-1)} className='self-start mb-8 text-cyan-400'>
        ← Back
      </button>
      <h1 className='text-4xl font-bold mb-6'>
        {project.title}
      </h1>
      <img src={project.image} alt={`Image of ${project.title}`} className='w-full max-w-2xl rounded-lg mb-8' />
      <p aria-label='Project description' className='max-w-2xl text-lg text-gray-300 mb-8'>
        {project.description}
      </p>
      <a href={project.link} target='_blank' rel='noopener noreferrer' aria-label='Github project link' className='rounded-lg px-8 py-3 bg-cyan-400 text-gray-900 font-bold text-lg hover:bg-cyan-300 transition-colors'>
        View Code on GitHub
      </a>
    </div>
  )
}

export default ProjectDetails