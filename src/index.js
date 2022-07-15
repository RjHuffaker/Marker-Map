import { createRoot } from 'react-dom/client';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

const root = document.getElementById('root');
const rootContainer = createRoot(root);
rootContainer.render(<AppRouter/>);