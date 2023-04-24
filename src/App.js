import React, { useState } from 'react';
import Expandable from "./components/Expandable";
import './App.css'
const information = [
  {
    header: 'Why everyone should live forrever',
    note: 'This is highly sensitive information on how to prevent death!!!!'
  },
  {
    header: 'The internet disappears',
    note:
      'I just uncovered the biggest threat to the internet. The internet disappears in 301 seconds. Save yourself'
  },
  {
    header: 'The truth about Elon musk and Mars!',
    note: 'Nobody tells you this. Elon musk ... News coming soon.'
  }
]


function App() {
  const [activeindex, setActiveIndex] = useState(null);
  const onExpand = evt => {
    console.log(evt.target.dataset);
    setActiveIndex(evt.target.dataset.index);
  }
  return (
    <div className="App">
      {/* controlled component */}
      {information.map(({ header, note }, index) => (
        <Expandable
          shouldExpand={index === +activeindex}
          onExpand={onExpand}
          index={index}
        >
          <Expandable.Header
            style={{ color: "red", border: '1px solid teal' }}
            data-index={index}>
            {header}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body>
            {note}
          </Expandable.Body>
        </Expandable>
      ))}
      {/* uncontrolled component */}
      <Expandable>
        <Expandable.Header style={{ color: "red", border: '1px solid teal' }}>
          React hooks
        </Expandable.Header>
        <Expandable.Icon />
        <Expandable.Body>
          An awesome hook
        </Expandable.Body>
      </Expandable>
    </div >
  );
}

export default App;
