import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <BooleanInput label="IsApproved" source="isApproved" />
        <TextInput label="SourceUrl" source="sourceUrl" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
