// Load Supabase credentials from environment variables (e.g., via vite-plugin-dotenv or similar)
/* eslint-disable */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "your-supabase-url-here";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY || "your-supabase-key-here";

const supabaseClient = (SUPABASE_URL && SUPABASE_KEY && !SUPABASE_URL.includes("YOUR_PROJECT") && !SUPABASE_KEY.includes("YOUR_"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

window.supabaseClient = supabaseClient;

function getSupabaseClient() {
  if (!window.supabaseClient) {
    console.warn('Supabase is not configured. Check VITE_SUPABASE_URL and VITE_SUPABASE_KEY.');
  }
  return window.supabaseClient;
}
