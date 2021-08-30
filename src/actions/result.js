import { get } from '../utils/api';


export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,playlist,artist`;
      
      const result = await get(API_URL);
      // result stores all the album, artist, and playlist info 
      console.log(result);
      const { albums, artists, playlists } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));
       // get the first song off an album
      var albumNumber = albums.items.length;
      var albumIds = {};

      for(var i = 0 ; i < albumNumber ; i++) {
        if(result.albums.items[i].album_type !== 'single') {
          console.log("Album Name: " +  result.albums.items[i].name + " Album Id: " + result.albums.items[i].id);
          var result2 = await get(`https://api.spotify.com/v1/albums/${result.albums.items[i].id}/tracks`); 
          console.log(result2);
          console.log("First Track on Album: " + result2.items[0].name);
          console.log("First Track on Album ID: " + result2.items[0].id);
          console.log("Link to First Track on Album ID: " + result2.items[0].external_urls.spotify);
          
        }
      }
      console.log(albumIds);
      return dispatch(setPlayList(playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addAlbums(result.albums));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMorePlaylist = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addPlaylist(result.playlists));
    } catch (error) {
      console.log('error', error);
    }
  };
};
