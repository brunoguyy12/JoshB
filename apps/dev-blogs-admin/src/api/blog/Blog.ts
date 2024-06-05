export type Blog = {
  content: string | null;
  createdAt: Date;
  id: string;
  isApproved: boolean | null;
  sourceUrl: string | null;
  title: string | null;
  updatedAt: Date;
};
