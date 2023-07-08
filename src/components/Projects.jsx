import React from 'react'
import { projectArray } from '@/pages/api/data'

const Projects = () => {
  return (
    <div className='projects-container'>
        <h2>Projects</h2>
        <div className='projects-grid'>

            {//If projectArray exists then map 
             //project content to each array item 
            }
            {projectArray && projectArray.map((i) => (
                    <div className="project-card" key={i.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            {//Link to GitHub project
                            }
                            <div className="small-icons">
                                <a href={i.link}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        {//Project Title and description
                        }
                        <h3>{i.title}</h3>
                        <p>{i.description}</p>
                    </div>
                ))
                }
        </div>
    </div>
  )
}

export default Projects