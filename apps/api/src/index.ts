import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { serve } from '@hono/node-server'

const app = new Hono()

app.use('*', logger())
app.use('*', cors({ origin: process.env.ALLOWED_ORIGIN ?? 'http://localhost:3000' }))

app.get('/health', (c) => c.json({ status: 'ok', ts: Date.now() }))

const port = Number(process.env.PORT ?? 3000)
serve({
  fetch: app.fetch,
  port,
}, (info) => {
  console.log(`Server running on port ${info.port}`)
})
