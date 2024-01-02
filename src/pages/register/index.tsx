import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Wrapper, Column, Row, Title, TitleLogin, SubtitleLogin, Account, SignIn} from './styles';
import {MdEmail, MdLock} from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nome: yup.string().required('Campo Obrigatório').min(3, 'No mínimo 3 caracteres'),
    email: yup.string().required('Campo Obrigatório').email('Este email não é válido'),
    password: yup.string().required('Campo Obrigatório').min(3, 'No mínimo 3 caracteres'),
  })
  .required();


const Register = () => {

    const {control, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

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
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form>
                    <Input name="nome" errorMessage={errors?.nome?.message} control={control} placeholder="Nome Completo" leftIcon={<FaUser/>}/>    
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail/>}/>    
                    <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock/>}/>
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleLogin>
                <Row>
                    <Account>Já tenho conta.</Account>
                    <SignIn href="/login">Fazer login.</SignIn>
                </Row>
                </Wrapper>
            </Column>
        </Container>
        </>
    );
}

export { Register };