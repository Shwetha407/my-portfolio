function Resume() {
  return (
    <section id="resume" className="section resume">
      <h1>Resume</h1>
      <p>You can download my resume from the link below:</p>
      <a 
        href="#" 
        className="resume-btn"
        onClick={(e) => {
          e.preventDefault()
          alert("Add your resume PDF link here later")
        }}
      >
        Download Resume (PDF)
      </a>
    </section>
  )
}
export default Resume