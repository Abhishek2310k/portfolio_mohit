import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Portfolio.scss';
import projects from './Projects';

const Portfolio = () => {
  const [typeProject, setTypeProject] = useState('all');

  const filteredProjects = typeProject === 'all'
    ? projects
    : projects.filter(project => project.type_of_project === typeProject);

  console.log(projects);


  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li data-filter="*" className={typeProject === 'all' ? 'filter-active' : ''} onClick={() => setTypeProject('all')}>
                All
              </li>
              <li
                data-filter=".filter-app"
                onClick={() => setTypeProject('simulation')}
                className={typeProject === 'simulation' ? 'filter-active' : ''}
              >
                Simulation
              </li>
              <li
                data-filter=".filter-card"
                onClick={() => setTypeProject('hardware')}
                className={typeProject === 'hardware' ? 'filter-active' : ''}
              >
                Hardware
              </li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <TransitionGroup component={null}>
            {filteredProjects.map(project => (
              <CSSTransition key={project.id} timeout={300} classNames="portfolio-item">
                <div className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-x">
                    <a href={project.project_url} title="more details">
                      <img src={project.img_url} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
