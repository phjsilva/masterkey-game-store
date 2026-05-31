import type { Game, GameDetails, HomeCatalog } from "@/types/game";

const API_BASE_URL = "https://keygames.onrender.com";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: 60 * 10 },
  });

  if (!response.ok) {
    throw new Error(`Erro ao carregar ${path}: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getGameDetails(id: string) {
  return request<GameDetails>(`/games/${id}`);
}

export async function getHomeCatalog(): Promise<HomeCatalog> {
  const [bestSellers, featured, recent, rpg] = await Promise.all([
    request<Game[]>("/games/vendidos"),
    request<Game[]>("/games/destaques"),
    request<Game[]>("/games/recentes"),
    request<Game[]>("/games/rpg"),
  ]);

  return { bestSellers, featured, recent, rpg };
}
