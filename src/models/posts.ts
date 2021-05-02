export interface IPost {
  id: string; //記事ID
  title: string; // 記事タイトル
  content: string; // 記事の内容
  createdAt: string; // 記事作成日時
  description: string;
  kv: { url: string; height: number; width: number };
}

export const mockPosts: Array<IPost> = [
  {
    id: "a1",
    title: "タイトル",
    content: "内容",
    createdAt: "2021-01-01",
    description: "ディスクぷション",
    kv: { url: "http://placehold.jp/150x150.png", width: 150, height: 150 },
  },
  {
    id: "b2",
    title: "タイトル2",
    content: "内容2",
    createdAt: "2021-02-02",
    description: "ディスクぷション",
    kv: { url: "http://placehold.jp/150x150.png", width: 150, height: 150 },
  },
  {
    id: "c3",
    title: "タイトル3",
    content: "内容3",
    createdAt: "2021-03-03",
    description: "ディスクぷション",
    kv: { url: "http://placehold.jp/150x150.png", width: 150, height: 150 },
  },
];
