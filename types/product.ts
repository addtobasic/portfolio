export type Product = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title: string;
  content: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};
