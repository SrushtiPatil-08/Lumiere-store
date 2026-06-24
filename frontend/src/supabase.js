import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(
  "https://ukjsslkmgzkgqbyzdxnp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVranNzbGttZ3prZ3FieXpkeG5wIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTU3ODA0MiwiZXhwIjoyMDk3MTU0MDQyfQ.jOwlyKNNPs2KA4YrFsfl0XJqn35tgwIGQy1XQZN5YPs"
)