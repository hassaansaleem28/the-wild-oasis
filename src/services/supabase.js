import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://boewzeuybzbbrbopsegz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvZXd6ZXV5YnpiYnJib3BzZWd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMjQyNzksImV4cCI6MjA2MDcwMDI3OX0.wLz9-8GswsHcN20kfsV1MxiQ66NNflSJQbbbgS34C3Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
