import { lazy, Suspense } from 'react';
import Loader from '../components/Loader';

const CardList = lazy(() => import('../components/List/CardList'));

export default () => (
  <main className="main">
    <Suspense fallback={<Loader />}>
      <CardList />
    </Suspense>
  </main>
)
