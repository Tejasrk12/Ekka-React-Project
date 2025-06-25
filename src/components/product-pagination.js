import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPagination = ({ product, itemsPerPage }) => {
    // State for the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil((product?.length || 0) / itemsPerPage);

    // Get products for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = product?.slice(startIndex, startIndex + itemsPerPage) || [];

    // Handle page changes
    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {/* Display Products for the Current Page */}
            <span>Showing 1-12 of 21 item(s)</span>
            <ul className="ec-pro-pagination-inner">
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a className="next" href="#">Next <i className="ecicon eci-angle-right"></i></a></li>
            </ul>

            {/* Pagination Controls */}
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> <a href="">Previous <i className="ecicon eci-angle-right"></i></a>  </button>
                <ul className="ec-pro-pagination-inner">
                    {/* Previous Button */}

                    {/* Page Numbers */}
                    {[...Array(totalPages).keys()].map((page) => (
                        <li key={page + 1} onClick={() => goToPage(page + 1)}  className={currentPage === page + 1 ? "active" : ""}> 
                            <Link >{page + 1}</Link>
                        </li>
                    ))}

                    {/* Next Button */}
                </ul>
                <button className="next" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} ><a href="">Next <i className="ecicon eci-angle-right"></i></a>  </button>
        </>
    );
};

export default ProductPagination;


//  {/* Pagination Controls */}
//  <div className="pagination-controls">
//  {/* Previous Button */}
//  <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}> Previous </button>

//  {/* Page Numbers */}
//  {[...Array(totalPages).keys()].map((page) => (
//      <button
//          key={page + 1}
//          onClick={() => goToPage(page + 1)}
//          className={currentPage === page + 1 ? "active" : ""}
//      >
//          {page + 1}
//      </button>
//  ))}

//  {/* Next Button */}
//  <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} > Next </button>
// </div>