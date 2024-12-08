import React from "react";
import { auth } from "../../../../auth";
import { prisma } from "../../../../prisma";

const Balance = async () => {
  const session = await auth();

  try {
    const existingBalance = await prisma.balance.findUnique({
      where: { userId: session!.user!.id },
    });

    if (!existingBalance) {
      throw new Error("Balance レコードが見つかりませんでした。");
    }
    return <div>{existingBalance.balance}</div>;
  } catch (error) {
    console.error("Balance レコードの取得中にエラーが発生しました:", error);
  }
};

export default Balance;
