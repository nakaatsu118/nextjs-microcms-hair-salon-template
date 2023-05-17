export interface Root {
  contents: StaffType[];
  totalCount: number;
  offset: number;
  limit: number;
}

export interface StaffType {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  jpName: string;
  enName: string;
  description: string;
  image: Image;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}
