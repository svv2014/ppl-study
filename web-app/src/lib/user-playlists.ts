const LS_KEY = 'ppl.playlists.user';

export interface UserPlaylist {
  id: string;
  name: string;
  lessonIds: string[];
  createdAt: string;
  updatedAt: string;
}

function load(): UserPlaylist[] {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as UserPlaylist[];
  } catch {
    return [];
  }
}

function save(playlists: UserPlaylist[]): void {
  localStorage.setItem(LS_KEY, JSON.stringify(playlists));
}

export function listPlaylists(): UserPlaylist[] {
  return load();
}

export function getUserPlaylists(): UserPlaylist[] {
  return load();
}

export function getPlaylist(id: string): UserPlaylist | undefined {
  return load().find((p) => p.id === id);
}

export function createPlaylist(name: string, lessonIds: string[] = []): UserPlaylist {
  const now = new Date().toISOString();
  const playlist: UserPlaylist = {
    id: crypto.randomUUID(),
    name,
    lessonIds,
    createdAt: now,
    updatedAt: now,
  };
  const all = load();
  save([...all, playlist]);
  return playlist;
}

export function updatePlaylist(
  id: string,
  partial: Partial<Pick<UserPlaylist, 'name' | 'lessonIds'>>,
): UserPlaylist | undefined {
  const all = load();
  const idx = all.findIndex((p) => p.id === id);
  if (idx === -1) return undefined;
  const updated: UserPlaylist = {
    ...all[idx],
    ...partial,
    updatedAt: new Date().toISOString(),
  };
  all[idx] = updated;
  save(all);
  return updated;
}

export function deletePlaylist(id: string): void {
  save(load().filter((p) => p.id !== id));
}

export function reorderLessons(id: string, lessonIds: string[]): UserPlaylist | undefined {
  return updatePlaylist(id, { lessonIds });
}
