import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />

        <Input
          icon={FiLock}
          name="password"
          placeholder="Senha"
          type="password"
        />

        <Button type="submit">Entrar</Button>

        <a href="f">Esqueci minha senha</a>
      </form>

      <a href="sdf">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
