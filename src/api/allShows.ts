import { ShowDetails } from "@/types/shows";
import client from "./client"
import { BASE_API } from "./config";

async function loadAllShows(): Promise<ShowDetails[]|void> {
  try {
    const res = await client(`${BASE_API}shows`)
    return res;
  } catch(err) {
    console.warn(err)
  }
}


export default loadAllShows;