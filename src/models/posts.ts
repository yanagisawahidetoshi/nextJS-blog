export interface IPost {
  id: number; //記事ID
  title: string; // 記事タイトル
  content: string; // 記事の内容
  createdAt: string; // 記事作成日時
}

export const mockPosts: Array<IPost> = [
  {
    id: 1,
    title: "タイトル",
    content: "内容",
    createdAt: "2021-01-01",
  },
  {
    id: 2,
    title: "タイトル2",
    content: "内容2",
    createdAt: "2021-02-02",
  },
  {
    id: 3,
    title: "タイトル3",
    content: "内容3",
    createdAt: "2021-03-03",
  },
];
