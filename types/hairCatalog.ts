export interface Root {
  contents: HairCatalogType[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface HairCatalogType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  image: Image;
  date: string;
  hairStyle: string;
  comment?: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}
