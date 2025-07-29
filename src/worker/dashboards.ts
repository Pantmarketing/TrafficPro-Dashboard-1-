import { getDashboardsByUser, getAllDashboards, getDashboardById, overwriteDashboardData } from "../../shared/db";

// Lista de dashboards filtrada por role
export async function handleDashboards(request: Request, user: any) {
  if (user.role === "master") {
    const dashboards = await getAllDashboards();
    return new Response(JSON.stringify(dashboards), { status: 200 });
  }

  const dashboards = await getDashboardsByUser(user.id);
  return new Response(JSON.stringify(dashboards), { status: 200 });
}

// Importação de Google Sheets via CSV
import fetch from "node-fetch";
import { parse } from "csv-parse/sync";

function parseBR(str: string) {
  return parseFloat(str.replace(/\./g, "").replace(",", "."));
}

export async function handleImportSheets(request: Request) {
  const { id } = request.params;
  const dashboard = await getDashboardById(id);

  if (!dashboard || !dashboard.sheets_url) {
    return new Response(JSON.stringify({ error: "Dashboard/planilha não encontrada" }), { status: 404 });
  }

  const response = await fetch(dashboard.sheets_url); // sheets_url deve ser CSV público
  const csv = await response.text();
  const records = parse(csv, { columns: true, skip_empty_lines: true });

  await overwriteDashboardData(dashboard.id, records.map((r: any) => ({
    date: r.Data,
    investment: parseBR(r.Investimento),
    clicks: Number(r.Clicks),
    leads: Number(r.Leads),
    conversations: Number(r.Conversas),
    sales: Number(r.Vendas),
    revenue: parseBR(r.Faturamento)
  })));

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
