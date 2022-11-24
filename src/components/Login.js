import { useNavigate } from "react-router-dom";
import Bankid from '../assets/Bankid.png'
import ButtonAppBar from "./ButtonAppBar";


const Login = () => {

    let navigate = useNavigate();

    return (
        <>
            <ButtonAppBar />
            <div className="main-content">
                <img src={Bankid} alt="" style={{ height: '100%', margin: '0' }} onClick={() => { navigate('/Welcome') }} />
            </div>
        </>
    );
}

export default Login;