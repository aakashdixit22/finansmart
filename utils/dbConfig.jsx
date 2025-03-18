import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://financetracker_owner:npg_BuGmd83epLlN@ep-lingering-hall-a5mg06bb-pooler.us-east-2.aws.neon.tech/financetracker?sslmode=require"
);
export const db = drizzle(sql, { schema });
