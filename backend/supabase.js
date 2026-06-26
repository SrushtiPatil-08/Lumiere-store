import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// Server environment variables (NO VITE prefix here)
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Safety check
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables in backend");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);