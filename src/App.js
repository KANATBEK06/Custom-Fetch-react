
import './App.css';
import { appFetch } from './components/CustomFetch';

function App() {
  const getHttp = async () => {
    const response =await appFetch({
      url: 'https://jsonplaceholder.typicode.com/posts'
    })
    console.log(response);
  }
 getHttp()
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
