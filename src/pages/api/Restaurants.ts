const apiKey = process.env.YELP_API

export default async function handleYelpCall(req: any, res: any) {
  const headers = {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  }
  const zipcode = req.query.zipcode
  const term = req.query.term
  await fetch(`https://api.yelp.com/v3/businesses/search?term=Restaurant&location=10463&limit=6`, {
    headers: headers,
    method: "GET"
  }).then((res) => res.json())
    .then((data) => {
      console.log(data)
      res.json(data)})
  // const yelp = require('yelp-fusion')

  // console.log(zipcode)
  // const searchRequest = {
  //   term: 'Restaurants',
  //   location: zipcode
  // };
  // let data;
  //
  //
  // const client = yelp.client(apiKey);
  //
  // await client.search(searchRequest).then((response: any) => {
  //   data = response.jsonBody;
  // });
  // res.json(data)
}


