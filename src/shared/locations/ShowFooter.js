import { useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';

function ShowFooter() {
    const location = useLocation();
  
    return (
      <>
        {location.pathname !== "/apresentacao/introducao" ? <Footer /> : ""}
      </>
    );
  }
  
  export default ShowFooter;