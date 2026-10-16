function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git & GitHub", "Responsive Design"]

  return (
    <section id="skills" className="section skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills