"use client";
import { deleteLog, DeleteLogFormState } from "@/app/lib/action";
import { Button } from "@/components/ui/button";
import { Log } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

const DeleteForm = ({ log }: { log: Log }) => {
  if (!log) return null;
  const initialState: DeleteLogFormState = { message: null };
  const deleteLogWithId = deleteLog.bind(null, log.id);
  const [state, formAction, isPending] = useActionState(
    deleteLogWithId,
    initialState
  );

  const router = useRouter();

  return (
    <form action={formAction}>
      <p className="mb-4 text-gray-400">本当にこのデータを削除しますか？</p>
      {state?.message && (
        <p className="mt-2 text-sm text-red-500" id="title-error">
          {state.message}
        </p>
      )}
      <div className="flex justify-end gap-2">
        <Button
          type="submit"
          disabled={isPending}
          className="bg-red-500 hover:bg-red-700"
        >
          YES
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          disabled={isPending}
          className="bg-gray-500 hover:bg-gray-700"
        >
          NO
        </Button>
      </div>
    </form>
  );
};

export default DeleteForm;
