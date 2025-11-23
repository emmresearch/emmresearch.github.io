import { Button } from './components/Button';
import { Header } from './components/Header';
import './App.scss';

export const App = () => {
    const handleClick = () => alert('Pressed');

    return (
        <div className="app">
            <Header title="GitHub Dark Theme" />
            <p>Template</p>
            <Button label="Press" onClick={handleClick} />
        </div>
    );
};