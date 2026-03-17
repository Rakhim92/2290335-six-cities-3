import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Main from '../../pages/main/main';

type AppScreenProps = {
  numberOfPlaces: number;
}

function App({numberOfPlaces}: AppScreenProps): JSX.Element {
  return (
    <Main numberOfPlaces = {numberOfPlaces}/>
  );
}

export default App;

