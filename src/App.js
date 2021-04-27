import { Route } from 'react-router';
import ContaintHeader from './containt';
import AboutFeature from './features/AboutFeature';
import ContactFeature from './features/ContactFeature';
import ProjectFeature from './features/ProjectFeature';
import Header from './header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route path='/'component={ContaintHeader} exact/>
      <Route path='/'component={ProjectFeature} exact/>
      <Route path='/'component={AboutFeature} exact/>
      <Route path='/'component={ContactFeature} exact/>

   
    </div>
  );
}

export default App;
