import React from 'react';
import {
  Show,
  ShowButton,
  SimpleShowLayout,
  RichTextField,
  DateField,
  List,
  Edit,
  Create,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  EmailField,
  NumberField,
  PasswordInput,
  NumberInput,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  useRecordContext,
  ChipField,
  ImageInput,
  ImageField,
  AutocompleteInput,
  DateInput,
  Pagination,
} from 'react-admin';

const statuses = [
  { status: 'active', label: 'active' },
  { status: 'inactive', label: 'inactive' },
];

const categoryFilters = [
  // <ReferenceInput label="Author" source="author_id" reference="users">
  //   <AutocompleteInput optionText="login" />
  // </ReferenceInput>,
  // <ReferenceInput label="Post" source="post_id" reference="posts">
  //   <AutocompleteInput optionText="title" />
  // </ReferenceInput>,
  // <SelectInput source="status" optionValue="status" optionText="label" choices={statuses} />,
];

export const CategoryList = props => (
  <List {...props} filters={categoryFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <EditButton />
    </Datagrid>
  </List>
);

const CategoryTitle = () => {
  const record = useRecordContext();
  return <span>Comment: id{record ? `${record.id}` : ''}</span>;
};

export const CategoryEdit = () => (
  <Edit title={<CategoryTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput label="Author" source="author_id" reference="users">
        <SelectInput disabled optionText="login" />
      </ReferenceInput>
      <DateInput disabled label="Publication date" source="publish_date" />
      <SelectInput source="status" optionValue="status" optionText="status" choices={statuses} validate={required()} />
      <TextInput disabled multiline source="content" fullWidth />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput label="Author" source="author_id" reference="users">
        <AutocompleteInput optionText="login" validate={required()} />
      </ReferenceInput>
      <ReferenceInput label="Post" source="post_id" reference="posts">
        <AutocompleteInput optionText="title" validate={required()} />
      </ReferenceInput>
      <SelectInput source="status" optionValue="status" optionText="label" choices={statuses} validate={required()} />
      <TextInput multiline source="content" validate={required()} fullWidth />
    </SimpleForm>
  </Create>
);

export const CategoryShow = props => (
  <Show title={<CategoryTitle />} {...props}>
    <TabbedShowLayout spacing={2}>
      <Tab label="Summary">
        <SimpleShowLayout>
          <NumberField source="id" />
          <ReferenceField label="Post" source="post_id" reference="posts">
            <TextField source="id" />
          </ReferenceField>
          <ReferenceField label="Author" source="author_id" reference="users">
            <TextField source="login" />
          </ReferenceField>
          <DateField label="Publication date" source="publish_date" />
          <TextField source="content" />
          <NumberField source="rating" />
          <TextField source="status" />
        </SimpleShowLayout>
      </Tab>
      <Tab label="Likes" path="likes">
        <ReferenceManyField reference="likes" target="target_comment" pagination={<Pagination />} label={false}>
          <Datagrid hover={false}>
            <TextField source="id" />
            <ReferenceField label="Author" source="author_id" reference="users">
              <TextField source="login" />
            </ReferenceField>
            <DateField label="Publication date" source="publish_date" locales="uk-UA" showTime />
            <TextField source="type" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);
