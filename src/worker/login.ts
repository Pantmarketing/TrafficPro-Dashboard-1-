import { getUserByUsername } from '../../shared/db';
import bcrypt from 'bcryptjs';

export async function handleLogin(request: Request) {
  const { username, password } = await request.json();

  const user = await getUserByUsername(username);
  if (!user) {
    return new Response(JSON.stringify({ error: 'Usuário não encontrado' }), { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return new Response(JSON.stringify({ error: 'Senha inválida' }), { status: 401 });
  }

  return new Response(JSON.stringify({
    id: user.id,
    username: user.username,
    role: user.role
  }), { status: 200 });
}
