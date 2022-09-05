import React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import restProvider from 'ra-data-json-server';
import { PostCreate, PostEdit, PostList, PostShow } from "./posts";
// import jsonServerProvider from 'ra-data-json-server'; 

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = restProvider('/api'); //???

const App = () => (
  <Admin title="My Custom Admin" dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
  </Admin>
);

export default App;