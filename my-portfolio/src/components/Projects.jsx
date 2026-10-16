function Projects() {
  const projects = [
    {
      title: "Bite Box",
      description: "A food delivery app built with HTML, CSS, and JavaScript."
    },
    {
      title: "Travel App",
      description: "A travel planning app with location-based features."
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio website built with HTML, CSS, JavaScript and React."
    }
  ]

  return (
    <section id="projects" className="section projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects