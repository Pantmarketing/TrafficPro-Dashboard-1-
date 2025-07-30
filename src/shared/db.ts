export async function getUserByUsername(username: string) {
    return { id: 1, username, password_hash: "$2a$10$xxxx", role: "master" };
  }
  
  export async function createUser(data: any) {
    return { id: 2, ...data };
  }
  
  export async function associateDashboards(userId: number, dashboards: number[]) {
    return true;
  }
  
  export async function getAllDashboards() {
    return [];
  }
  
  export async function getDashboardsByUser(userId: number) {
    return [];
  }
  
  export async function getDashboardById(id: string) {
    return { id: 1, sheets_url: "https://example.com" };
  }
  
  export async function overwriteDashboardData(id: number, data: any) {
    return true;
  }
  