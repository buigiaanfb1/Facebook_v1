import { homeRoutes } from './routes/index';
import ClientTemplate from './Templates/Client';
import Navbar from './components/Navbar';
import { Router, Switch } from 'react-router-dom';
import history from './history';
import { useEffect } from 'react';
import { createProfile } from './firebase/data/createProfile';
import { getSubDocument } from './firebase/data/getDocument';
import { getUser } from './firebase/data/currentUser';
import { useDispatch } from 'react-redux';
import { CURRENT_USER, FRIENDS_INITIAL } from './common/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { projectFirestore } from './firebase/config';

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
  console.log('App render');
  const dispatch = useDispatch();
  const { res } = getUser();

  useEffect(() => {
    checkToCreateProfile();
  });

  const checkToCreateProfile = async () => {
    // nếu là người mới thì create profile vice versa
    if (res) {
      const profileInfo = await createProfile(res);
      await getFriendCollection(profileInfo.userID);
      dispatch({
        type: CURRENT_USER,
        payload: profileInfo,
      });
    }
  };

  const getFriendCollection = async (userID) => {
    const friendsRequested = await getSubDocument(
      'users',
      'friendsRequested',
      userID
    );
    const friendsIncoming = await getSubDocument(
      'users',
      'friendsIncoming',
      userID
    );
    const friends = await getSubDocument('users', 'friends', userID);
    dispatch({
      type: FRIENDS_INITIAL,
      payload: { friends, friendsIncoming, friendsRequested },
    });
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
