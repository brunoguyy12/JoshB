import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" multiline source="content" />
        <BooleanInput label="IsApproved" source="isApproved" />
        <TextInput label="SourceUrl" source="sourceUrl" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
