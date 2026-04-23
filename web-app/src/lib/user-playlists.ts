export interface UserPlaylist {
  id: string;
  name: string;
  lessonIds: string[];
  createdAt: string;
}

export function getUserPlaylists(): UserPlaylist[] {
  return [];
}
