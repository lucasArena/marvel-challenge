import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import { Container, SubmitButton } from './styles';

import Loading from '~/components/Loading';

import Logo from '~/assets/logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const schema = Yup.object().shape({
    pubKey: Yup.string().required('A chave pública é obrigátorio'),
    privKey: Yup.string().required('A chave privada é obrigátorio'),
  });

  function handleSignIn(data) {
    dispatch(signInRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSignIn}>
        <img src={Logo} alt="Logo do challenge Marvel" />
        <Input name="pubKey" placeholder="Chave pública" />
        <Input name="privKey" placeholder="Chave privada" />
        <SubmitButton type="submit" loading={loading} disabled>
          {loading ? <Loading color="#FFF" size={24} /> : 'Acessar'}
        </SubmitButton>
      </Form>
    </Container>
  );
}
