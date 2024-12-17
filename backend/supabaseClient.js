import {createClient} from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const {REACT_APP_SUPABASE_URL,REACT_APP_SUPABASE_ANON_KEY}=process.env;
// const supabaseurl="https://grqetjmtbgirzifwqumw.supabase.co";
// const supabaseanonkey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdycWV0am10YmdpcnppZndxdW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MTE0MzgsImV4cCI6MjA0ODk4NzQzOH0.QLay5ak3fSto7R5LG_PFz8MH8hLnIprvXzpA0l7VXgQ";



export const supabase=createClient(REACT_APP_SUPABASE_URL,REACT_APP_SUPABASE_ANON_KEY);




        