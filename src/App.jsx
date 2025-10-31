import './scss/App.scss'
import htmlIcon from './assets/html-5.png'
import cssIcon from './assets/css-3.png'
import jsIcon from './assets/js.png'
import reactIcon from './assets/react.svg'
import pythonIcon from './assets/python.png'
import javaIcon from './assets/java.png'

function App() {
  const skills = [
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'Java', icon: javaIcon }
  ]

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">KB</div>
          <h1>Khuu Gia Bao</h1>
          <p className="title">Web Developer</p>
        </div>

        <div className="profile-info">
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="info-item">
              <span className="icon">📧</span>
              <span className="label">Email:</span>
              <span className="value">
                <a href="mailto:netframe3105@gmail.com">netframe3105@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="info-section">
            <h2>Social Media</h2>
            <div className="info-item">
              <span className="icon">👤</span>
              <span className="label">Facebook:</span>
              <span className="value">
                <a href="https://www.facebook.com/baobei2405/" target="_blank" rel="noopener noreferrer">
                  facebook.com/baobei2405
                </a>
              </span>
            </div>
            <div className="info-item">
              <span className="icon">💻</span>
              <span className="label">Github:</span>
              <span className="value">
                <a href="https://github.com/itzBaowy" target="_blank" rel="noopener noreferrer">
                  github.com/itzBaowy
                </a>
              </span>
            </div>
          </div>

          <div className="info-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="mailto:netframe3105@gmail.com" className="email" title="Email">
            📧
          </a>
          <a href="https://www.facebook.com/baobei2405/" className="facebook" target="_blank" rel="noopener noreferrer" title="Facebook">
            👤
          </a>
          <a href="https://github.com/itzBaowy" className="github" target="_blank" rel="noopener noreferrer" title="GitHub">
            💻
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
