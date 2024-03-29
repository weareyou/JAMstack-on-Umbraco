// otherwise it doesn't work
// eslint-disable-next-line import/prefer-default-export
export async function get(req) {
  const url = decodeURIComponent(req.params.rest);
  const api = `${import.meta.env.VITE_UMBRACO_API_URL}content/?site=1106&route=/${url}`;
  const username = import.meta.env.VITE_UMBRACO_USERNAME;
  const password = import.meta.env.VITE_UMBRACO_PASSWORD;
  let data;

  try {
    const res = await fetch(api, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });
    data = await res.json();
    // console.log(data, api);
  } catch (e) {
    data = {
      error: 'Content api not available',
      errorCode: 502,
      api,
      url,
    };
  }

  return {
    body: {
      ...data,
    },
  };
}
