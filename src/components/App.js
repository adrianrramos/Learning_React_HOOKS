import React, { useState } from 'react';

import ResoourceList from './ResoourceList';

const App = () => {
    const [resource, setResource] = useState('posts');
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResoourceList resource={resource}/>
        </div>
    );
};

export default App
