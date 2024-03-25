Create a UI in React, for a VS code like folder structure. Clicking the folder should expand to show files inside it. And clicking the nested folder should expand to show further files inside it.

Clicking the folder again should collapse to hide all files and folders inside it.

Use JSON to define the folder structure. Updating the JSON should automatically update the UI without any need to manually change the code.

Implementation:

`structure.js`
```js
const folderStructureData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'index.html',
      isFolder: false,
    },
    {
      name: 'app',
      isFolder: true,
      items: [
        {
          name: 'app.js',
          isFolder: false,
        },
        {
          name: 'src',
          isFolder: true,
          items: [
            {
              name: 'main.jsx',
              isFolder: false,
            },
            {
              name: 'utils.js',
              isFolder: false,
            },
          ],
        },
        {
          name: 'app.css',
          isFolder: false,
        },
      ],
    },
  ],
};

export default folderStructureData;
```

`App.jsx`
```js
import './App.css';

import Folder from './components/Folder';
import File from './components/File';

import folderStructureData from './structureData/structure.js';

function App() {
  return (
    <>
      {folderStructureData.items.map((item) => {
        return item.isFolder ? <Folder item={item} /> : <File item={item} />;
      })}
    </>
  );
}

export default App;
```

`Folder.jsx`
```js
import { useState } from 'react';
import File from './File';

export default function Folder({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <p
        style={{
          background: 'lightgray',
          padding: '2px',
          cursor: 'pointer',
        }}
        onClick={() => setIsExpanded((prevState) => !prevState)}
      >
        &#x276D; {item.name}
      </p>
      <p
        style={{
          paddingLeft: '12px',
        }}
      >
        {isExpanded &&
          item.items.map((item) =>
            item.isFolder ? <Folder item={item} /> : <File item={item} />
          )}
      </p>
    </>
  );
}
```

`File.jsx`
```js
export default function File({ item }) {
  return (
    <p
      style={{
        background: 'lightgray',
        padding: '2px',
      }}
    >
      &#9781; {item.name}
    </p>
  );
}
```

Follow up question.

What type of props does these components should accept to make is a good open source project.
Answer: onExpand, onCollapse, onSelect, and etc.