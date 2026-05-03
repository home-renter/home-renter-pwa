import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';

config({ path: '.env' }); // Add this line

export default {
  schema: './src/db/schema',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
