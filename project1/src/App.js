import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from "./component/routercontrol/routercontrol";
import Detail from "./component/api/detail";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterURL/>
        <Detail/>
      </div>
    </Router>
    
  );
}
export default App;
