"use client";
import React, { useEffect } from "react";
import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { addBalance, State } from "@/app/lib/action";
import confetti from "canvas-confetti";

const AddBalanceForm = () => {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    addBalance,
    initialState
  );

  //   紙吹雪エフェクト
  useEffect(() => {
    if (state.message) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [state.message]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="md:flex md:items-start md:gap-4">
        {/* Title Input */}
        <div className="flex flex-col md:w-1/2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-600 bg-[#2a273f] p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            name="title"
            placeholder="我慢したものを入力"
            required
            aria-describedby="title-error"
          />
          {state?.errors?.title &&
            state.errors.title.map((error: string) => (
              <p
                className="mt-2 text-sm text-red-500"
                id="title-error"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>

        {/* Price Input */}
        <div className="flex flex-col md:w-1/2">
          <input
            type="number"
            className="w-full rounded-md border border-gray-600 bg-[#2a273f] p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            name="price"
            placeholder="節約できた額を入力"
            required
            aria-describedby="price-error"
          />
          {state?.errors?.price &&
            state.errors.price.map((error: string) => (
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

      {/* Submit Button */}
      <div className="mx-auto w-[50%]">
        <Button
          disabled={isPending}
          className="bg-pink-500 hover:bg-pink-700 h-[50px] w-full text-lg"
        >
          我慢できた！！
        </Button>
      </div>
    </form>
  );
};

export default AddBalanceForm;