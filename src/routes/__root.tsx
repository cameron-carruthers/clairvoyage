import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { GlobalStyle } from "../theme";

import type { AuthContext } from '../auth'

import "~/styles/global.css"

interface MyRouterContext {
  auth: AuthContext
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Outlet />
      <GlobalStyle />
      <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
    </>
  ),
})

