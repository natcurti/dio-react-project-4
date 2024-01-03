import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, EsqueciText, CriarText } from './styles';
import {MdEmail, MdLock} from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";
 
const schema = yup
  .object({
    email: yup.string().required('Campo Obrigatório').email('Este email não é válido'),
    password: yup.string().required('Campo Obrigatório').min(3, 'No mínimo 3 caracteres'),
  })
  .required();


const Login = () => {

    const {handleLogin} = useAuth();

    const {control, handleSubmit, formState: { errors }} = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });
    
    const onSubmit = async (formData: IFormData) => {
        handleLogin(formData);
    };

    return (
        <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" type="submit"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    )
}

export { Login };