import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server"; // <-- SERVER

// GET /api/condominios
export async function GET() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("condominio")
    .select("*")
    .order("id_condominio");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data, { status: 200 });
}

// POST /api/condominios
// export async function POST(req: Request) {
//   const supabase = await createClient();
//   const body = await req.json();

//   // Ex.: exigir usuário logado (RLS + policies)
//   const { data: { session } } = await supabase.auth.getSession();
//   if (!session) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

//   const { error } = await supabase.from("condominios").insert(body);
//   if (error) return NextResponse.json({ error: error.message }, { status: 400 });

//   return NextResponse.json({ ok: true }, { status: 201 });
// }