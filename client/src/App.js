import { homeRoutes } from './routes/index';
import ClientTemplate from './Templates/Client';
import Navbar from './components/Navbar';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { useEffect } from 'react';
import { createProfile } from './firebase/data/createProfile';
import { getUser } from './firebase/data/currentUser';
import { useSelector, useDispatch } from 'react-redux';

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
  useEffect(() => {
    const { res } = getUser();
    // nếu là người mới thì create profile vice versa
    createProfile(res);
  });

  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>{showLayoutClient()}</Switch>
      </Router>
    </div>
  );
};

export default App;
