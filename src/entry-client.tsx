import {fork} from 'effector';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {App} from './app';

const scope = fork();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App scope={scope} />
    </StrictMode>,
);
