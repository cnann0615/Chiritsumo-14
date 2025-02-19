"use client";
import Link from "next/link";
import React from "react";

const PaginationUI = ({
  totalPages,
  page,
}: {
  totalPages: number;
  page: string;
}) => {
  const currentPage = parseInt(page);

  // ページネーションリンクを生成
  const paginationLinks = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1; // ページ番号 (1-based index)
    const isActive = page === currentPage; // 現在のページかどうかを判定
    return (
      <li key={page} className="inline-block mx-1">
        <Link
          href={`/logManagement/logTable/${page}`}
          className={`px-3 py-1 rounded ${
            isActive
              ? "bg-pink-500 text-white" // 現在のページはピンク背景＋白文字
              : "text-gray-400 hover:text-white hover:bg-gray-600"
          }`}
        >
          {page}
        </Link>
      </li>
    );
  });

  return (
    <nav className="mt-4">
      <ul className="flex justify-center items-center list-none p-0 m-0">
        {/* Back ボタン */}
        <li className="mx-2">
          {currentPage > 1 ? (
            <Link
              href={`/logManagement/logTable/${currentPage - 1}`}
              className="text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-1 rounded"
            >
              &lt; Back
            </Link>
          ) : (
            <span className="text-gray-500 px-3 py-1 rounded opacity-50 pointer-events-none">
              &lt; Back
            </span>
          )}
        </li>

        {/* ページ番号 */}
        {paginationLinks}

        {/* Next ボタン */}
        <li className="mx-2">
          {currentPage < totalPages ? (
            <Link
              href={`/logManagement/logTable/${currentPage + 1}`}
              className="text-gray-400 hover:text-white hover:bg-gray-600 px-3 py-1 rounded"
            >
              Next &gt;
            </Link>
          ) : (
            <span className="text-gray-500 px-3 py-1 rounded opacity-50 pointer-events-none">
              Next &gt;
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default PaginationUI;
