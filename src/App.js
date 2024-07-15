import photo from './photo.jpg'
import './App.css';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <div className="card">
        <img src={photo} className="image" alt="my image" />
        <h1>Rabia Imran</h1>
        <h2>Frontend Developer</h2>
        <a href="https://github.com/dashboard" className="link">
          rabiaimran.github
        </a>

        <div className="buttons">
          <a href="mailto:youremail@example.com" className="emailbutton">
            Email
          </a>
          <button className="linkedInbutton">LinkedIn</button>
        </div>
        <div className="h1">
          <h1>About</h1>
          <p>
            Academically accomplished and deeply dedicated, I manage my online business alongside possessing
            extensive expertise in React and a robust portfolio encompassing
            numerous projects in MERN stack web development, I am driven by a
            passion for innovation and excellence.
          </p>

          <h1>Interest</h1>
          <ul>
            <li>English Debating</li>
            <li>Basketball</li>
            <li>Baking</li>
            <li>Drawing</li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
