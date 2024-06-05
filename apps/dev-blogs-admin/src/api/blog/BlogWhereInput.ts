import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type BlogWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  isApproved?: BooleanNullableFilter;
  sourceUrl?: StringNullableFilter;
  title?: StringNullableFilter;
};
