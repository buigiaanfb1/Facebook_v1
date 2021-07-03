import { homeRoutes } from './routes/index';
import ClientTemplate from './Templates/Client';
import { Router, Switch } from 'react-router-dom';
import history from './history';

const showLayoutClient = () => {
  if (homeRoutes && homeRoutes.length > 0) {
    return homeRoutes.map((route, index) => {
      return (
        <ClientTemplate
          exact
          path={route.path}
          component={route.component}
          key={index}
        />
      );
    });
  }
};

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>{showLayoutClient()}</Switch>
      </Router>
    </div>
  );
};

export default App;
