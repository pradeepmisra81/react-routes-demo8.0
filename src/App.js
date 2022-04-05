import { Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <Switch>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
      <Route path='/quotes/:quoteid'>
        <QuoteDetail/>
      </Route>
      <Route path='new-quote'>
        <NewQuotes/>
      </Route>
    </Switch>
  );
}

export default App;
