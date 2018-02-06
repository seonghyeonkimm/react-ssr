import List from 'Shared/List';
import Detail from 'Shared/Detail';

export default [
  {
    path: '/',
    component: List,
    exact: true,
  },
  {
    path: '/:name',
    component: Detail,
    exact: true,
  },
];
