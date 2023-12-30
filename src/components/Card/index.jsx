import {
    CardContainer,
    ImageBackground,
    Content,
    UserInfo,
    UserPicture,
    PostInfo,
    HasInfo
} from "./styles"

import { FiThumbsUp } from 'react-icons/fi'
import background from '../../assets/background.png'

const Card = () => {
    return (
        <CardContainer>
            <ImageBackground src={background}/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/128557924?s=400&u=fb56a8c26fcdd6977b748bf1272c6321cd27197d&v=4" alt="Imagem do Usuário"/>
                    <div>
                        <h4>Natalia Curti</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de HTML e CSS</h4>
                    <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #Javascript</h4>
                    <p>
                        <FiThumbsUp />10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    );
}

export { Card };