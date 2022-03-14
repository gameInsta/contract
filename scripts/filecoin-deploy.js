import dotenv from 'dotenv';
import { NFTStorage } from 'nft.storage';
import passionFruit from  '../metadata/chainlink-passionFruit.mjs'
import Cacao from  '../metadata/chainlink-Cacao.mjs'
import Papaya from  '../metadata/chainlink-Papaya.mjs'
import Baobab from  '../metadata/chainlink-Baobab.mjs'

dotenv.config();
const apiKey = process.env.NFTSTORAGE_API_KEY;

async function main() {

const client = new NFTStorage({ token: apiKey })

const metadata = await client.store(passionFruit);
const metadata2 = await client.store(Cacao);
const metadata3 = await client.store(Papaya);
const metadata4 = await client.store(Baobab);
console.log(metadata.url);
console.log(metadata2.url);
console.log(metadata3.url);
console.log(metadata4.url);
}

main();

