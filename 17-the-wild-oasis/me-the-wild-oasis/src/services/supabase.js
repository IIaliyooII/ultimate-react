import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfypcjpymuoqvkdqhbqa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmeXBjanB5bXVvcXZrZHFoYnFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyODMyNzgsImV4cCI6MjAwNzg1OTI3OH0.0MwFucWnVNhBihdnTkSJKXHv-VHlUhTLFLBodLgr6LA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
