import Repository from ".";

const RESOURCE = "user";

export default {
  index: (query: string) => {
    return Repository.get(`${RESOURCE}/?${query}`);
  },
};
