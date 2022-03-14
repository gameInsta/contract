import fs from 'fs';
import { File } from 'nft.storage'

const Baobab = {
  name: "Baobab",
  description: "",
  image:new File([ await fs.promises.readFile('/var/www/html/myproject/buldit/seedBlockNft/images/4KV-7KR.jpeg')], '4KV-7KR.jpeg',
    { type: 'image/png'
  }),
  attributes: [
    {
      trait_type: "Scientific Name",
      value: "Adansonia Digitata"
    },
    {
      trait_type: "Date Of Birth",
      value: "11/29/2021"
    },
    {
      trait_type: "Country",
      value: "india"
    },
    {
      trait_type: "Birth Place",
      value: "Kilifi"
    },
    {
      trait_type: "Residence",
      value: "Matsangoni"
    },
    {
      trait_type: "Latitude",
      value: "3° 24′ 5.23″ S"
    },
    {
      trait_type: "Longitude",
      value: "39° 55′ 33.37″ E"
    },
    {
      trait_type: "Tree ID",
      value: "4KV-7KR"
    },
    {
      trait_type: "CO2 Offset",
      value: "300Kg/Year"
    }
  ]
};


export default Baobab;