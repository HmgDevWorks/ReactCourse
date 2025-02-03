import { CORE_CONCEPTS } from './data.js';

import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {
              CORE_CONCEPTS.map(element => {
                console.log("ELEMENT", element);
                return (<CoreConcept {...element} />);
              })
            }

          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
