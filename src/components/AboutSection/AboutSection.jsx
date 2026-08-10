import './AboutSection.css';
 
function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/profile.jpg' alt='Aishvary Rai' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm Aishvary, a developer based in India building fast, accessible web experiences.</p>
        </div>
      </div>
    </section>
  );
}
 
export default AboutSection;
 
 