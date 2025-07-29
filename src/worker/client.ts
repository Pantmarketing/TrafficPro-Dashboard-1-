import { createUser, associateDashboards } from "../../shared/db";
import bcrypt from "bcryptjs";

export async function handleCreateClient(request: Request) {
  const { username, password, dashboardIds } = await request.json();
  const password_hash = await bcrypt.hash(password, 10);

  const user = await createUser({
    username,
    password_hash,
    role: "cliente"
  });

  if (Array.isArray(dashboardIds)) {
    await associateDashboards(user.id, dashboardIds);
  }

  return new Response(JSON.stringify({ id: user.id, username: user.username }), { status: 200 });
}
