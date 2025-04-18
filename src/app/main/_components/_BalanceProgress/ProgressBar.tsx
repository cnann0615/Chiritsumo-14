import React from 'react';
import { Balance, WantedItem } from '@prisma/client';

// 欲しい物リストの各アイテムの値段に対する残高の進捗をプログレスバーで可視化
export const ProgressBar = ({
  item,
  balance
}: {
  item: WantedItem;
  balance: Balance;
}) => {
  return (
    <div className="mt-2 flex items-center gap-2">
      <progress
        max="1"
        value={balance.balance / item.price}
        className="w-full"
      ></progress>
      <p className="text-xs sm:text-base">
        {Math.max(
          0,
          Math.min(Math.round((balance.balance / item.price) * 100), 100)
        )}
        %{/* あと{item.price - balance!.balance}円 */}
      </p>
    </div>
  );
};
