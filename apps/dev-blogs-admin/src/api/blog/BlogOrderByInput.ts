import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isApproved?: SortOrder;
  sourceUrl?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
