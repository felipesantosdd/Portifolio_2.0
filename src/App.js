import Snowfall from 'react-snowfall';
import { About } from './components/About/about';
import { Reader } from './components/Header/header';
import { Main } from './components/Main/main';
import { ProjectsComponent } from './components/Projects/projects';
import { UserProvider } from './Context/user.Context';

function App() {
  return (
    <>
      <Snowfall style={{
        position: 'fixed',
        with: '100vw',
        height: '100vh'
      }
      }
        snowflakeCount={200}
        radius={[0.5, 1.5]}
        speed={[0.5, 2]}
        wind={[1, 10]}
      />
      <UserProvider>

        <Reader />
        <Main />
        <ProjectsComponent />
        <About />
      </UserProvider>
    </>


  );
}

export default App;
