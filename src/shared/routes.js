import List from 'Shared/ListContainer';
import Detail from 'Shared/DetailContainer';

export default [
  {
    path: '/',
    component: List,
    exact: true,
  },
  {
    path: '/coin/:name',
    component: Detail,
    exact: true,
  },
];
