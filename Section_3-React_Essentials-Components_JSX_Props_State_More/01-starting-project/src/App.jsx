import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <ul>
            {
              CORE_CONCEPTS.map(element => {
                return (<CoreConcept {...element} />);
              })
            }

          </ul>
        </section>
        <section id='examples'>
          <menu>
            <TabButton onClick={() => { handleClick("components") }}>Components</TabButton>
            <TabButton onClick={() => { handleClick("jsx") }}>JSX</TabButton>
            <TabButton onClick={() => { handleClick("props") }}>Props</TabButton>
            <TabButton onClick={() => { handleClick("state") }}>States</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
          </div>
        </section >
      </main >
    </div >
  );
}

export default App;
