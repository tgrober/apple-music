import { get } from '../utils/api';
import { MusicKit, MusicKitInstance, MediaItem } from "../types";
import { Form, Button } from 'react-bootstrap';

const developerToken = process.env.REACT_APP_DEVELOPER_TOKEN;
const appName = process.env.REACT_APP_NAME;
const appBuild = process.env.REACT_APP_BUILD;

export const RunApp = () => {

	const handleSearch = (searchTerm) => {			
	    return async(dispatch) => {
			    try {
					   const musicKit = window.MusicKit;
						musicKit.configure({
			 				developerToken: developerToken,
			 		 		app: {
			    				name: appName,
			    				build: appBuild
			  				}
						});

				  const instance = window.MusicKit.getInstance();
			      const API_URL = 'https://api.music.apple.com/v1/catalog/us/songs/900032829';
			      
			      const result = await get(API_URL);
			      // result stores all the album, artist, and playlist info 
			      console.log(result);
			    
			      return;
			    } catch (error) {
			      console.log('error', error);
			    }
		};
			 	
  	};

	return (
    <div>
      <Form onSubmit={handleSearch}>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter search term</Form.Label>
          <Form.Control
            type="search"
            name="searchTerm"
            placeholder="Search for album, artist or playlist"
            autoComplete="off"
          />
        </Form.Group>
        <Button variant="info" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );

}

export default RunApp