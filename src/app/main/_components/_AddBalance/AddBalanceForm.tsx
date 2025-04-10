'use client';

import { useEffect, useRef } from 'react';
import { useActionStateCompat } from '@strozw/use-action-state-compat';
import confetti from 'canvas-confetti';

import { LoadingSpinner } from '@/app/_components/LoadingSpinner';
import { addBalance } from '@/app/lib/action';
import { AddBalanceFormState } from '@/app/lib/formState';
import { Button } from '@/components/ui/button';

export const AddBalanceForm = () => {
  // ServerActions × useActionStateCompat
  const initialState: AddBalanceFormState = {
    message: null,
    errors: {}
  };
  const [state, formAction, isPending] = useActionStateCompat(
    addBalance,
    initialState
  );

  // Submit時のFormクリア用
  const formRef = useRef<HTMLFormElement>(null);

  // 残高追加（ログ作成）成功時の処理
  useEffect(() => {
    if (state.message) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // 紙吹雪エフェクト
      void confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.45 }
      });
      // Formクリア
      formRef.current?.reset();
    }
  }, [state.message]);

  return (
    <form action={formAction} ref={formRef} className="space-y-3">
      <div className="md:flex md:items-center md:gap-4">
        <div className="mb-2 flex flex-col md:mb-0 md:w-1/2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-600 bg-[#2a273f] p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            name="title"
            placeholder="我慢したものを入力"
            required
          />
          {state.errors?.title?.map((error: string) => (
            <p
              className="mt-2 text-sm text-red-500"
              id="title-error"
              key={error}
            >
              {error}
            </p>
          ))}
        </div>
        <div className="flex flex-col md:w-1/2">
          <input
            type="number"
            className="w-full rounded-md border border-gray-600 bg-[#2a273f] p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            name="price"
            placeholder="節約できた額を入力"
            required
          />
          {state.errors?.price?.map((error: string) => (
            <p
              className="mt-2 text-sm text-red-500"
              id="price-error"
              key={error}
            >
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto w-[50%]">
        <Button
          className="h-[50px] w-full bg-pink-500 text-lg font-bold hover:bg-pink-700"
          disabled={isPending}
        >
          {isPending ? (
            <LoadingSpinner size={24} color="white" />
          ) : (
            '我慢できた！'
          )}
        </Button>
      </div>
    </form>
  );
};
