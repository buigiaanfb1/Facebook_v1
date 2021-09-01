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
import {
  CURRENT_USER,
  CURRENT_USER_OFFLINE,
  FRIENDS_INITIAL,
} from './common/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MessagesPopup from './components/MessagesPopup';
import TopLoadingBar from './components/TopLoadingBar';

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

  useEffect(() => {
    return () =>
      window.addEventListener('beforeunload', async function (e) {
        e.preventDefault();
        dispatch({
          type: CURRENT_USER_OFFLINE,
        });
      });
  }, []);

  window.addEventListener('beforeunload', async function (e) {
    e.preventDefault();
    dispatch({
      type: CURRENT_USER_OFFLINE,
    });
  });

  const checkToCreateProfile = async () => {
    // nếu là người mới thì create profile vice versa
    if (res) {
      const profileInfo = await createProfile(res);
      await getFriendCollection(profileInfo.userID);
      // addUserOnline;
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
        <TopLoadingBar />
        <Switch>{showLayoutClient()}</Switch>
        <MessagesPopup />
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
