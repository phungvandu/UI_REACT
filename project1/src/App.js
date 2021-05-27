import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from "./component/routercontrol/routercontrol";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterURL/>
      </div>
    </Router>
    
  );
}
export default App;
