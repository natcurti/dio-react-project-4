import { 
    BuscarInputContainer,
    Container,
    Row,
    Menu,
    MenuRight,
    Input,
    Wrapper,
    UserPicture
} from './styles';

import logo from '../../assets/logo-dio.png'
import { Button } from "../Button";
import { useNavigate  } from "react-router-dom";
import { IHeader } from './types';

const Header = ({autenticado} :IHeader) => {

    const navigate = useNavigate();

    const handleClickLogin = () => {
        navigate('/login');
    }

    const handleClickRegister = () => {
        navigate('/register');
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da Dio"/>
                    {autenticado ? (
                        <> 
                        <BuscarInputContainer>
                            <Input placeholder="Buscar..."/>
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                    ) : (
                        <>
                        <MenuRight href="/">Home</MenuRight>
                        <Button title="Entrar" onClick={handleClickLogin}/>
                        <Button title="Cadastrar" onClick={handleClickRegister}/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };