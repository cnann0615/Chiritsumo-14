import EditModal from "@/app/_components/EditModal";
import React from "react";
import { prisma } from "../../../../../prisma";
import DeleteLogForm from "@/app/logManagement/_components/DeleteLogForm";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  let log = null;

  try {
    log = await prisma.log.findUnique({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.error(e);
  }

  return (
    <EditModal>
      <h2 className="mb-4 text-lg font-bold">削除</h2>
      <DeleteLogForm log={log!} />
    </EditModal>
  );
};

export default page;
