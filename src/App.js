import Snowfall from 'react-snowfall';
import { Reader } from './components/Header/header';
import { Main } from './components/Main/main';
import { Projects } from './components/Projects/projects';

function App() {
  return (
    <>
      <Snowfall style={{
        position: 'fixed',
        with: '100vw',
        height: '100vh'
      }
      }
        snowflakeCount={750}
        radius={[0.5, 3.5]}
        speed={[0.5, 2.5]}
        wind={[1, 10]}
      />
      <Reader></Reader>
      <Main></Main>
      <Projects></Projects>

    </>


  );
}

export default App;
