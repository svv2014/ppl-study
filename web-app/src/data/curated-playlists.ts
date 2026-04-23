export interface CuratedPlaylist {
  id: string;
  name: string;
  tagline: string;
  lessonIds: string[];
  durationMin: number;
}

export const curatedPlaylists: CuratedPlaylist[] = [];
