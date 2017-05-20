import React from 'react';
import { Admin, Resource, Delete, jsonServerRestClient } from 'admin-on-rest';

import { authClient, restClient } from 'aor-feathers-client';
import { feathersClient, addUploadCapabilities } from './feathersClient';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

import PostIcon from 'material-ui/svg-icons/action/book';
// import UserIcon from 'material-ui/svg-icons/social/group';
import Dashboard from './Dashboard';
// import authClient from './authClient';

const authClientOptions = {
  storageKey: 'feathers-jwt',
  authenticate: { strategy: 'local' },
};

const enhancedRestClient = addUploadCapabilities(restClient(feathersClient));
const App = () => (
  <Admin
    title={<span>My Awesome Blog</span>}
    restClient={enhancedRestClient}
    authClient={authClient(feathersClient, authClientOptions)}
    dashboard={Dashboard}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      remove={Delete}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} />
  </Admin>
);


/*const App = () => (
  <Admin
    authClient={authClient(feathersClient, authClientOptions)}
    restClient={restClient(feathersClient)}
  >
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
  </Admin>
);*/

export default App;