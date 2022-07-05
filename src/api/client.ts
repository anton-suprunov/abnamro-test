type ClientConfig = {
  method: string;
  signal?: AbortSignal;
}

async function client(url: string, signal?: AbortSignal) {
  const config = {
    method: 'GET'
  } as ClientConfig;

  if (signal) config.signal = signal;

  try {
    const response = await window.fetch(url, config);
    if (response.ok) {
      return await response.json()
    } else {
      const errorMessage = await response.text()
      throw new Error(errorMessage)
    }
  } catch (e) {
    console.warn(e)
  }
}

export default client;