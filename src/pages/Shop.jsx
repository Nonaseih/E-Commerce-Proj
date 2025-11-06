/**
    * @description      : 
    * @author           : fortu
    * @group            : 
    * @created          : 27/10/2025 - 16:37:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/10/2025
    * - Author          : fortu
    * - Modification    : 
**/
// src/pages/Shop.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import PRODUCTS from "../data/products";
import "./styles/Shop.css";

/** Preload given image URLs */
function preloadImages(urls = []) {
  urls.forEach((src) => {
    if (!src) return;
    const img = new Image();
    img.src = src;
  });
}

export default function Shop() {
  const itemsPerPage = 8;
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const safePage = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const totalPages = Math.ceil(PRODUCTS.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(() =>
    Math.min(Math.max(1, safePage), totalPages)
  );

  // Keep URL in sync when internal state changes
  useEffect(() => {
    if (currentPage !== safePage) {
      setSearchParams({ page: currentPage });
    } else if (!searchParams.get("page")) {
      // if no page param, set it so share links are consistent
      setSearchParams({ page: currentPage });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // When user navigates with URL (back/forward), update internal state
  useEffect(() => {
    if (safePage !== currentPage) {
      setCurrentPage(Math.min(Math.max(1, safePage), totalPages));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("page")]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentProducts = useMemo(
    () => PRODUCTS.slice(indexOfFirstItem, indexOfLastItem),
    [indexOfFirstItem, indexOfLastItem]
  );

  // Preload next page images
  useEffect(() => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPages) {
      const iLast = nextPage * itemsPerPage;
      const iFirst = iLast - itemsPerPage;
      const nextProducts = PRODUCTS.slice(iFirst, iLast);
      const urls = nextProducts.map((p) => p.img);
      preloadImages(urls);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = useCallback(
    (pageNumber) => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
        // smooth scroll to top of shop section
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [totalPages]
  );

  // Keyboard navigation: left / right arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        handlePageChange(currentPage - 1);
      } else if (e.key === "ArrowRight") {
        handlePageChange(currentPage + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentPage, handlePageChange]);

  return (
    <section className="shop-page">
      <h1>KICKS</h1>

      {/* Animate whole grid on page change so layout fades smoothly */}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={`page-${currentPage}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          style={{ width: "100%" }}
        >
          <ProductGrid products={currentProducts} />
        </motion.div>
      </AnimatePresence>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
