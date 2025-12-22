import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects } from '../projects.json'
import ReactMarkdown from 'react-markdown'

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  if (!project) return <div>404 Not Found</div>;

  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(project.description)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [project.description]);

  return (
    <div role='Project Details Page' className='w-full min-h-screen bg-[#0a192f] text-white flex flex-col items-center p-10'>
      <button onClick={() => navigate(-1)} className='self-start mb-8 text-cyan-400'>
        ← Back
      </button>
      <h2 className='text-2xl sm:text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
        {project.title}
      </h2>
      <img src={project.image} alt={`Image of ${project.title}`} className='w-full max-w-2xl rounded-lg my-10 mb-8' />
      <div className='prose prose-invert lg:prose-xl p-6'>
        <ReactMarkdown aria-label='Project description paragraph' components={{ a: ({ node, ...props }) => (
          <a {...props} target='_blank' rel='noopener noreferrer' className='inline hover:text-blue-400 underline' />
        ) }}>
          {content}
        </ReactMarkdown>
      </div>
      <a href={project.link} target='_blank' rel='noopener noreferrer' aria-label={`Github project link for ${project.title}`} className='rounded-lg px-8 py-3 bg-cyan-400 text-gray-900 font-bold text-lg hover:bg-cyan-300 transition-colors'>
        View Code on GitHub
      </a>
    </div>
  )
}

export default ProjectDetails