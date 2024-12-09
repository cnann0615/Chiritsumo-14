"use client";
import { addWantedItem, AddWantedItemFormState } from "@/app/lib/action";
import { Button } from "@/components/ui/button";
import React, { useActionState } from "react";

const AddWantedItemForm = () => {
  const initialState: AddWantedItemFormState = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    addWantedItem,
    initialState
  );
  return (
    <form
      action={formAction}
      className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
    >
      <div className="flex-1">
        <input
          type="text"
          placeholder="商品名"
          name="name"
          required
          className="w-full rounded-md border border-gray-600 bg-black bg-opacity-10 p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {state?.errors?.name &&
        state.errors.name.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" id="name-error" key={error}>
            {error}
          </p>
        ))}
      <div className="flex-1">
        <input
          type="number"
          name="price"
          placeholder="価格"
          required
          className="w-full rounded-md border border-gray-600 bg-black bg-opacity-10 p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {state?.errors?.price &&
        state.errors.price.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" id="price-error" key={error}>
            {error}
          </p>
        ))}
      <div className="flex-1">
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          className="w-full rounded-md border border-gray-600 bg-black bg-opacity-10 p-3 text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {state?.errors?.url &&
        state.errors.url.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" id="url-error" key={error}>
            {error}
          </p>
        ))}
      <div className="sm:w-auto">
        <Button
          disabled={isPending}
          className=" font-bold sm:w-auto bg-pink-500 hover:bg-pink-700 h-[50px] w-full text-lg"
        >
          追加
        </Button>
      </div>
    </form>
  );
};

export default AddWantedItemForm;
