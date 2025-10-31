import { getApi } from "@/lib/_oneEntry";
import React from "react";
import AddToCartBtn from "./AddToCart";

async function Products({ page }) {
  const api = await getApi();
  const products = await api.Products.getProductsByPageUrl(page.pageUrl);
  console.log(products);
  console.log(page.pageUrl);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-10">
      {products.items.map((product, index) => (
        <a href={`/product/${product.id}`} key={index}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-full max-h-96 rounded-lg p-3"
              src={product.attributeValues?.image?.value.downloadLink}
              alt={product.localizeInfos.title}
            />
            <div className="p-5">
              <a href={`/product/${product.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.localizeInfos.title}
                </h5>
              </a>
              <p className="mb-3 min-h-32 font-normal text-gray-700 dark:text-gray-400">
                {product.attributeValues.description.value[0].htmlValue
                  ?.replace("<p>", "")
                  ?.replace("</p>", "")
                  ?.replace("<br>", "")}
              </p>
              <span className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mr-2 mb-2">
                {product.attributeValues.price.value} $
              </span>
              <AddToCartBtn product={product} />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Products;
