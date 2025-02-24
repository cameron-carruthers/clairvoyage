import {
  createFileRoute,
  redirect,
  useRouter,
} from '@tanstack/react-router'
import { z } from 'zod'
import { useCallback } from "react";

import LoginForm from "../components/molecules/LoginCard";
import styled from "styled-components";
import { useAuth } from '../auth';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginContainer = styled.div`
  max-height: fit-content;
  max-width: fit-content;
`;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
const fallback = '/' as const

export const Route = createFileRoute('/login')({
  validateSearch: z.object({
    redirect: z.string().optional().catch(''),
  }),
  beforeLoad: ({ context, search }) => {
    if (context.auth.isAuthenticated) {
      throw redirect({ to: search.redirect || fallback })
    }
  },
  component: LoginComponent,
})

function LoginComponent() {
  const { login } = useAuth();
  const router = useRouter()
  const navigate = Route.useNavigate()

  const search = Route.useSearch()

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();

      if (login) {
        await login();
      }
      await router.invalidate()
      await navigate({ to: search.redirect || fallback })
    },
    [login]
  );

  return (
    <Container>
      <LoginContainer>
        <LoginForm onSubmit={onSubmit} />
      </LoginContainer>
    </Container>
  )
}
