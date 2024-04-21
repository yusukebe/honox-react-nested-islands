import { createRoute } from 'honox/factory'
import Badge from '../islands/badge'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <>
      <Badge name="parent">
        <Badge name="child" />
      </Badge>
    </>
  )
})
