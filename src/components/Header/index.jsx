import { 
    BuscarInputContainer,
    Container,
    Row,
    Menu,
    MenuRight,
    Input,
    Wrapper,
    Column,
    UserPicture
} from './styles';

import logo from '../../assets/logo-dio.png'
import { Button } from "../Button";

const Header = ({autenticado}) => {
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
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"/>
                        <Button title="Cadastrar"/>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };