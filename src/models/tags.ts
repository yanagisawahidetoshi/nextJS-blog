export interface ITag {
  id: string; //記事ID
  name: string; // 記事タイトル
}

export const mockTags: Array<ITag> = [
  {
    id: "aaaa",
    name: "Next.js",
  },
  {
    id: "BBBB",
    name: "Storybook",
  },
];
