import App from 'screens/App';
import { createRoot } from 'react-dom/client';

import './index.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
    <App />
);