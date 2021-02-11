// dependencies
import { Switch, Route } from 'react-router-dom'
// components
import { LandingPage } from './components/pages/landing'

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
