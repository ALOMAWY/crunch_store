import { getApi } from "@/lib/_oneEntry";
import React from "react";
import Products from "./Products";

async function ProductsPage() {
  const api = await getApi();
  const pages = await api.Pages.getRootPages();

  return (
    <div>
      {pages?.map((page) => (
        <div key={page.id}>
          <h3 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl pt-10">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {page.localizeInfos.title}
            </span>
          </h3>
          <Products page={page} />
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
