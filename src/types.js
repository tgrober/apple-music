export interface Window {
    MusicKit: any;
  }


export interface MusicKitConfiguration {
  developerToken: string;
  appName: string;
  appBuild: string;
}

export interface Artwork {
  width: number;
  height: number;
  url: string;
  bgColor: string;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
}

export interface PlayParams {
  id: string;
  kind: string;
  catalogId: string;
  isLibrary: boolean;
  kind: string;
  reporting: boolean;
}

export interface SongAttributes {
  albumName: string;
  artistName: string;
  artwork: Artwork;
  discNumber: number;
  durationInMillis: number;
  isrc: string;
  name: string;
  releaseDate: string;
  trackNumber: number;
  url: string;
  genreNames: string[];
  playParams: PlayParams;
  previews: [
    {
      url: string;
    }
  ];
}

export interface MediaItem {
  id: string;
  type: MediaItemType;
  href: string;
  isExplicitItem: boolean;
  relationships?: {
    tracks: {
      data: any;
    };
  };
  attributes: SongAttributes;
}

export interface Chart {
  name: string;
  chart: string;
  href: string;
  next: string;
  data: MediaItem[];
}

export interface PlaybackTime {
  currentPlaybackDuration: number;
  currentPlaybackTime: number;
  currentPlaybackTimeRemaining: number;
}

export interface MusicKitInstance {
  musicUserToken: string;
  developerToken: string;
  player: Player;
  setQueue: any;
  play: () => Promise;
  pause: any;
  skipToNextItem: () => Promise;
  skipToPreviousItem: () => Promise;
  seekToTime: (time: number) => Promise;
  isAuthorized: boolean;
  authorize: () => Promise;
  unauthorize: () => Promise;
  api: any;
  stop: any;
  addToLibrary: any;
  changeToMediaAtIndex: any;
}

export interface MusicKit {
  getInstance: () => MusicKitInstance;
}

export interface Queue {}
