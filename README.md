# Plan Your Trip Backend API

Plan Your Trip Backend API is an Express.js application that serves as an intermediary for Google Places API. It allows client-side applications to retrieve detailed information about different places, including hotels, restaurants, and attractions.

## Features

- Fetches places details from Google Places API.
- Searches for hotels, restaurants, and various attractions.
- Offers cors support to allow requests from various origins.
- Supports paginated results.

## Endpoints

1. `GET /api/place/hotels`: Fetches hotels based on the provided query.
2. `GET /api/place/restaurants`: Fetches restaurants based on the provided query.
3. `GET /api/place/attractions`: Fetches various attractions based on the provided query. The attractions could be museums, parks, art galleries, churches, or zoos.
4. `GET /api/place/details`: Fetches the details of a place based on the provided placeId.

## Setup

To setup the TravelMate API, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the necessary packages.
3. Create a `.env` file and add your Google Maps API key like so: `GOOGLE_MAPS_API_KEY=YOUR_API_KEY`.
4. Start the server with `npm start`.

Make sure you replace `YOUR_API_KEY` with your actual Google Maps API Key.

## Usage

To use any of the API endpoints, you should make a GET request to the desired endpoint and provide the required query parameters:

- For the hotels, restaurants, and attractions endpoints, you should provide a `query` parameter. For example, `/api/place/hotels?query=NewYork`.
- For the details endpoint, you should provide a `placeId` parameter. For example, `/api/place/details?placeId=ChIJN1t_tDeuEmsRUsoyG83frY4`.

Please note that all requests to this API should be made from a client-side application as this server is designed to be an intermediary between client-side applications and the Google Places API.

## Errors

In case of an error, the API will respond with a status code of 500 and an error message. If the endpoint is not found, the API will respond with a status code of 404 and a 'Not Found' message.
