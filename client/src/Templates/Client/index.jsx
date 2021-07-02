import { Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';

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
      <Route exact={exact} path={path} component={component} />
    </LayoutClient>
  );
};

export default ClientTemplate;
