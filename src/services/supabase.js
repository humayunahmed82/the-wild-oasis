import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pgivtahwgbfjvcwivprs.supabase.co";
export const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnaXZ0YWh3Z2JmanZjd2l2cHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDc1OTQsImV4cCI6MjAxMjA4MzU5NH0.dlheOjJy5ctA_BYt6SRVn2s19vHX_HYCHVyYKJbnsfY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
