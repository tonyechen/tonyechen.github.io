import Navbar from '../components/Navbar';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';

export default function Home() {
    return (
      <>
        <Navbar />
        <div className="container">
          <Main />
          <About />
          <Projects />
        </div>
      </>
    );
}
