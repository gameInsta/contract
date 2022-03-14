import fs from 'fs';
import { File } from 'nft.storage'

const passionFruit = {
  name: "Passion Fruit",
  description: "",
  image:new File([ await fs.promises.readFile('/var/www/html/myproject/buldit/seedBlockNft/images/E8L-Y37.jpg')], 'E8L-Y37.jpg',
              { type: 'image/png'
  }),
  attributes: [
    {
      trait_type: "Scientific Name",
      value: "Passiflora edulis"
    },
    {
      trait_type: "Date Of Birth",
      value: "04/13/2021"
    },
    {
      trait_type: "Country",
      value: "india"
    },
    {
      trait_type: "Birth Place",
      value: "Kisii"
    },
    {
      trait_type: "Residence",
      value: "Rusinga Island"
    },
    {
      trait_type: "Latitude",
      value: "0° 25′ 44.68″ S"
    },
    {
      trait_type: "Longitude",
      value: "34° 7′ 50.63″ E"
    },
    {
      trait_type: "Tree ID",
      value: "E8L-Y37"
    },
    {
      trait_type: "CO2 Offset",
      value: "5Kg/Year"
    }
  ]
};


export default passionFruit;
