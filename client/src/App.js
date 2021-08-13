import { homeRoutes } from './routes/index';
import ClientTemplate from './Templates/Client';
import Navbar from './components/Navbar';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { useEffect } from 'react';
import { createProfile } from './firebase/data/createProfile';
import { getUser } from './firebase/data/currentUser';
import { useDispatch } from 'react-redux';
import { CURRENT_USER } from './common/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('App render');
    checkToCreateProfile();
  });

  const checkToCreateProfile = async () => {
    const { res } = getUser();
    // nếu là người mới thì create profile vice versa
    if (res) {
      const profileInfo = await createProfile(res);
      dispatch({
        type: CURRENT_USER,
        payload: profileInfo,
      });
    }
  };

  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>{showLayoutClient()}</Switch>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
