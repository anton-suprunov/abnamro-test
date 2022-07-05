import { ShowDetails } from "@/types/shows";
import client from "./client"
import { BASE_API } from "./config";

async function loadShowDetails(showId: string): Promise<ShowDetails|void> {
  try {
    const res = await client(`${BASE_API}shows/${showId}`)
    return res;
  } catch(err) {
    console.warn(err)
  }
}


export default loadShowDetails;