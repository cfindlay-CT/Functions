// Supabase Edge Function using Deno runtime and Fetch API

export const main = async (req: Request): Promise<Response> => {
  return new Response(
    JSON.stringify({ message: "Hello, World!" }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};