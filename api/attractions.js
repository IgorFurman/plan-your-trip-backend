router.get('/', async(req, res) => {
  try {
    const { query } = req.query;
    const placeTypes = ['museum', 'park', 'art_gallery', 'church', 'zoo'];
    const allResults = [];

    for (let i = 0; i < placeTypes.length; i++) {
      let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}+${placeTypes[i]}&key=${process.env.GOOGLE_MAPS_API_KEY}&language=en`;

      while (url) {
        const response = await axios.get(url);
        console.log(`Response data for ${query} + ${placeTypes[i]}:`, response.data);
        allResults.push(...response.data.results);

        if (response.data.next_page_token) {
          url = `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${response.data.next_page_token}&key=${process.env.GOOGLE_MAPS_API_KEY}`;
          
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else {
          url = null;
        }
      }
    }

    res.send({ results: allResults });
  } catch (error) {
    console.error('Error searching Google Places API:', error);
    console.log('Error details:', error.message, error.stack); 
    res.status(500).send('Error searching Google Places API');
  }
})
