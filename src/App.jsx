import {Navbar, Home, About, Projects, Contacts, Footer} from "./components"
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
