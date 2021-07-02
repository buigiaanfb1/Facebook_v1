import { homeRoutes } from './routes/index';
import ClientTemplate from './Templates/Client';
import { BrowserRouter, Switch } from 'react-router-dom';

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
      <BrowserRouter>
        <Switch>{showLayoutClient()}</Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
