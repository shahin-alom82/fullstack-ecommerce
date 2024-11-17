import { useEffect, useState } from "react";
import Container from "./Container";
import ProductsSideView from "./ProductsSideView";
import PaginationProductsList from "./PaginationProductsList";

const Shop = () => {
      return (
            <div className="py-10">
                  <Container>
                        <h1>Available Products on sale</h1>
                        <div>
                              <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
                                    <ProductsSideView />
                              </div>
                              <PaginationProductsList/>
                        </div>
                  </Container>
            </div>
      );
};

export default Shop;