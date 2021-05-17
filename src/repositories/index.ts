export default {
  get: async (path: string) => {
    const key = { headers: { "X-API-KEY": process.env.API_KEY ?? "" } };

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`;
    const res: any = await fetch(url, key)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
    return res.json();
  },
  post: async (path: string, payload: {}) => {
    const key = {
      headers: {
        "X-WRITE-API-KEY": process.env.NEXT_PUBLIC_WRITE_API_KEY ?? "",
        "Content-Type": "application/json",
      },
      method: "POST",
      ...payload,
    };

    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`;
    const res: any = await fetch(url, key)
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
    return res.json();
  },
};
