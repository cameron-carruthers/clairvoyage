import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/$id"!</div>
}
