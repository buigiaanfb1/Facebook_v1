import { Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const LayoutClient = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

const ClientTemplate = ({ component, path, exact }) => {
  return (
    <LayoutClient>
      <Route exact={exact} path={path} component={component} key={uuidv4()} />
    </LayoutClient>
  );
};

export default ClientTemplate;
