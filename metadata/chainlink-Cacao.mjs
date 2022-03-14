import fs from 'fs';
import { File } from 'nft.storage'

const Cacao = {
  name: "Cacao",
  description: "",
  image:new File([ await fs.promises.readFile('/var/www/html/myproject/buldit/seedBlockNft/images/E9G-6NY.jpg')], 'E9G-6NY.jpg',
    { type: 'image/png'
  }), 
  attributes: [
    {
      trait_type: "Scientific Name",
      value: "Theobroma cacao"
    },
    {
      trait_type: "Date Of Birth",
      value: "03/29/2021"
    },
    {
      trait_type: "Country",
      value: "Cameroon"
    },
    {
      trait_type: "Birth Place",
      value: "Centre"
    },
    {
      trait_type: "Residence",
      value: "Centre"
    },
    {
      trait_type: "Latitude",
      value: "4° 57′ 49.95″ N"
    },
    {
      trait_type: "Longitude",
      value: "11° 43′ 32.65″ E"
    },
    {
      trait_type: "Tree ID",
      value: "E9G-6NY"
    },
    {
      trait_type: "CO2 Offset",
      value: "5.5Kg/Year"
    }
  ]
};

export default Cacao;