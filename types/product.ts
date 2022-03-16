export type Product = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
  title: string;
  content: string;
  link?: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};
