import React from "react";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
import Card from "@/components/Card";
import { getFileTypesParams } from "@/lib/utils";
import { notFound } from "next/navigation";

type PageProps = {
  searchParams: { query?: string; sort?: string };
  params: { type?: string };
};

const validTypes = ['images', 'documents', 'media', 'others'];

const Page = async ({ searchParams, params }: PageProps) => {
  const type = params?.type || "";

  
  if (!validTypes.includes(type)) {
    notFound();
  }

  const types = getFileTypesParams(type) as FileType[];

  const searchText = searchParams?.query || "";
  const sort = searchParams?.sort || "";

  const files = await getFiles({ types, searchText, sort });

  const totalSizeBytes = files.documents.reduce(
    (acc: number, file: Models.Document) => acc + (file.size || 0),
    0
  );

  const totalSizeMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">{totalSizeMB} MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>

            <Sort />
          </div>
        </div>
      </section>

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
};

export default Page;
