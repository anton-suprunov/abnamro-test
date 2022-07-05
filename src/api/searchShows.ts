import { SearchResult } from "@/types/search";
import { ShowDetails } from "@/types/shows";
import client from "./client"
import { BASE_API } from "./config";

let controller: AbortController, signal: AbortSignal;

async function searchShows(term: string): Promise<SearchResult[]|void> {
  if (controller) {
    controller.abort();
  }
  
  controller = new AbortController();
  signal = controller.signal;

  const searchParams = new URLSearchParams({ q: term.trim() })

  try {
    const res = await client(`${BASE_API}search/shows?${searchParams}`, signal)
    return res;
  } catch(err) {
    console.warn(err)
  }
}

export default searchShows;