import { createClient } from "@supabase/supabase-js";

// Must match Vercel env variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check (prevents blank screen crashes)
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables in frontend");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);