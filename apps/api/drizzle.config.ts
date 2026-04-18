import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',     // matches your design document
  out: './drizzle',                 // migrations will go here
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, // we'll set this next
  },
});
