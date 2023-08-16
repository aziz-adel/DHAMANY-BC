import { EthProvider } from "./contexts/EthContext";
import Form from "./components/Form.jsx";

export default function App() {
  return (
    <EthProvider>
      <div id="App">
        
         <Form/>
         
      </div>
    </EthProvider>
  );
}


