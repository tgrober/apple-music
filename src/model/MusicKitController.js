import React from "react";
import { MusicKit, MusicKitInstance, MediaItem, Chart } from "../types";
import { MediaItemTypes } from "./MediaItem";
import axios, { AxiosInstance } from "axios";

const developerToken = process.env.REACT_APP_DEVELOPER_TOKEN;
const appName = process.env.REACT_APP_NAME;
const appBuild = process.env.REACT_APP_BUILD;


export class MusicKitController {
  private _instance?: MusicKitInstance;
  private _apiClient?: AxiosInstance;
  public musicKit: MusicKit;
  public favoritesPlaylist?: MediaItem;
  public favorites: MediaItem[];
  public topSongsChart?: Chart;

  constructor() {
    const musicKit = window.MusicKit;
    musicKit.configure({
      developerToken: developerToken,
      app: {
        name: appName,
        build: appBuild,
      }
    });
    this.musicKit = musicKit;
    
  }

  get instance(): MusicKitInstance {
    if (!this._instance) {
      this._instance = this.musicKit.getInstance();
    }
    return this._instance!;
  }

  get apiClient(): AxiosInstance {
    if (!this._apiClient) {
      this._apiClient = axios.create({
        baseURL: "https://api.music.apple.com/v1",
        headers: {
          Authorization: `Bearer ${this.instance.developerToken}`,
          "Music-User-Token": this.instance.musicUserToken,
          "Cache-Control": "no-cache"
        }
      });
    }
    return this._apiClient!;
  };
};

 

export const MusicKitContext = React.createContext<MusicKitController | null>(
  null
);
