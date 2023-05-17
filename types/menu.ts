export interface Root {
  contents: MenuType[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MenuType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  enMenuName: string;
  jpMenuName: string;
  price: string;
}
