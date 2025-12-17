import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../projects.json'

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) return <div>404 Not Found</div>;

  const techStack = project.stack.join(", ")

  return (
    <div role='Project Details Page' className='w-full min-h-screen bg-[#0a192f] text-white flex flex-col items-center p-10'>
      <button onClick={() => navigate(-1)} className='self-start mb-8 text-cyan-400'>
        ← Back
      </button>
      <h1 className='text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
        {project.title}
      </h1>
      <img src={project.image} alt={`Image of ${project.title}`} className='w-full max-w-2xl rounded-lg my-10 mb-8' />
      <p className='py-6 sm:text-2xl'>
        Technologies used: {techStack}
      </p>
      {project.description.map((p, index) => (
        <p key={index} aria-label='Project description paragraph' className='max-w-2xl text-lg text-gray-300 mb-8 whitespace-pre-wrap'>
          {p}
        </p>
      ))}
      <a href={project.link} target='_blank' rel='noopener noreferrer' aria-label='Github project link' className='rounded-lg px-8 py-3 bg-cyan-400 text-gray-900 font-bold text-lg hover:bg-cyan-300 transition-colors'>
        View Code on GitHub
      </a>
    </div>
  )
}

export default ProjectDetails