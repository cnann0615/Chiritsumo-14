import React, { Suspense } from 'react';

import { SkeletonList } from '../SkeletonList';
import { List } from './List';

export const WantedItemList = () => {
  return (
    <div>
      <h1 className="mb-4 pl-1 text-xl font-bold text-gray-100 sm:text-2xl">
        欲しい物リスト
      </h1>
      <Suspense fallback={<SkeletonList />}>
        <List />
      </Suspense>
    </div>
  );
};
