const SUPABASE_URL = "your-supabase-url-here"; // Replace with your actual Supabase URL
const SUPABASE_KEY = "your-supabase-key-here"; // Replace with your actual Supabase key

const supabaseClient = (SUPABASE_URL && SUPABASE_KEY && !SUPABASE_URL.includes("YOUR_PROJECT") && !SUPABASE_KEY.includes("YOUR_"))
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

window.supabaseClient = supabaseClient;

function getSupabaseClient() {
  if (!window.supabaseClient) {
    console.warn('Supabase is not configured. Check SUPABASE_URL and SUPABASE_KEY.');
  }
  return window.supabaseClient;
}
