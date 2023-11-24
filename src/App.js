import {ChakraProvider} from '@chakra-ui/react';
import './App.css';
import InputTasks from './Components/InputTasks';
import Nav from './Components/Nav';

function App() {
 
  return (
    <ChakraProvider>
    <div className="App">
      <Nav/>
      <InputTasks/>
    </div>
    </ChakraProvider>
  )
}


export default App;
