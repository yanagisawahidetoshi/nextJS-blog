import Repository from "./";

const RESOURCE = "blog";

export default {
  index: () => {
    return Repository.get(`${RESOURCE}?limit=30`);
  },
  show: (id: string) => {
    return Repository.get(`${RESOURCE}/${id}`);
  },
  create: (body: {}) => {
    return Repository.post(`${RESOURCE}`, body);
  },
};
