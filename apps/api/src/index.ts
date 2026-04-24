import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use('*', logger())
app.use('*', cors({ origin: process.env.ALLOWED_ORIGIN ?? 'http://localhost:3000' }))

app.get('/health', (c) => c.json({ status: 'ok', ts: Date.now() }))

export default {
  fetch: app.fetch,
}
