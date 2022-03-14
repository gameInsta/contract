import fs from 'fs';
import { File } from 'nft.storage'

const Papaya ={
  name: "Papaya",
  description: "",
  image:new File([ await fs.promises.readFile('/var/www/html/myproject/buldit/seedBlockNft/images/5K4-5G8.jpeg')], '5K4-5G8.jpeg',
  { type: 'image/png'
}) "https://treedefi-nft-assets.s3.us-east-2.amazonaws.com/5K4-5G8.jpeg",
  attributes: [
    {
      trait_type: "Scientific Name",
      value: "Carica papaya"
    },
    {
      trait_type: "Date Of Birth",
      value: "03/29/2021"
    },
    {
      trait_type: "Country",
      value: "Tanzania"
    },
    {
      trait_type: "Birth Place",
      value: "Ilolo"
    },
    {
      trait_type: "Residence",
      value: "Ilolo"
    },
    {
      trait_type: "Latitude",
      value: "9° 11′ 2.73″ S"
    },
    {
      trait_type: "Longitude",
      value: "33° 34′ 47.73″ E"
    },
    {
      trait_type: "Tree ID",
      value: "5K4-5G8"
    },
    {
      trait_type: "CO2 Offset",
      value: "10Kg/Year"
    }
  ]
}};

export default Papaya;
