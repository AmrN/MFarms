import React from 'react';
import {
  List,
  Datagrid,
  SimpleList,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  DisabledInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  LongTextInput,
  // DeleteButton,
  Filter,
  Responsive,
  ImageField,
  ImageInput
} from 'admin-on-rest';
import { postSchema, Joi } from 'shared';

export const PostList = (props) => (
  <List
    {...props}
    filters={<PostFilter />}
  >
    <Responsive
      small={
        <SimpleList
          key={record => record.id}
          primaryText={record => record.title}
          tertiaryText={record => new Date(record.createdAt).toLocaleDateString()}
        />
      }
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField label="Author" source="authorId" reference="users">
            <TextField source="email" />
          </ReferenceField>
          <TextField
            source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="$text.$search" alwaysOn />
    <ReferenceInput label="Author" source="authorId" reference="users" allowEmpty>
      <SelectInput optionText="email" />
    </ReferenceInput>
  </Filter>
)

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


export const PostEdit = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm validate={validate}>
      <DisabledInput source="id" />
      <ReferenceInput label="Author" source="authorId" reference="users">
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="title" />
      <ImageField source="image" title="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);


const validate = (_values) => {
  const values = { ..._values };
  Object.keys(values).forEach(k => {
    if (k.startsWith('upload_')) {
      delete values[k];
    }
  });
  // const errors = {};
  // if (!values.firstName) {
  //     errors.firstName = ['The firstName is required'];
  // }
  // if (!values.age) {
  //     errors.age = ['The age is required'];
  // } else if (values.age < 18) {
  //     errors.age = ['Must be over 18'];
  // }
  const result = Joi.validate(values, postSchema, { abortEarly: false });
  // debugger
  const errs = result.error.details.reduce((res, errObj) => {
    const key = errObj.path;
    const val = errObj.message.replace(/^".+"\s*/, '');
    console.log(res);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(val);
    return res;
  }, {});
  // console.log(result.error.details);
  return errs;
};

// const validate = (values) => {
//   return { title: ['some error'] };
// };

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm validate={validate}>

      <TextInput source="title" />
      <LongTextInput source="body" />
      <ImageInput source="upload_image" label="image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

      <ImageInput source="upload_gallery" label="image" accept="image/*" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);

/*export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm validate={validatePostCreation}>
      <ReferenceInput label="Author" source="authorId" reference="users" allowEmpty>
        <SelectInput optionText="email" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Create>
);*/