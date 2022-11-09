import { Link } from "react-router-dom";
import ButtonAppBar from './ButtonAppBar';

const Login = () => {
    return ( 
        <>
        <ButtonAppBar />
        <div className="main-content">
            <Link to="/Welcome">Välkommen</Link>
        </div>
        </>
     );
}
 
export default Login;