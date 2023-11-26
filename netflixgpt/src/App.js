import './App.css';
import Body from './components/Body';
import { Provider } from "react-redux"
import appStore from './utils/app';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
