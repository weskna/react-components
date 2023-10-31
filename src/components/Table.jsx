import { useEffect, useState } from "react";
import { useFilters } from "../filtersContext";

const Table = () => {
  const { state, dispatch } = useFilters();
  const { filters } = state;
  const [products, setProducts] = useState(null);

  const fetchData = (type, filter) => {
    let url = `https://fakestoreapi.com/products`;

    switch (type) {
      case "search":
        url += `/category/${filter}`;
        break;
      case "sort":
        url += `?sort=${filter}`;
        break;
    }

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // we are limited by what we can do with data since api doesn't provide support sorting and filtering by (multiple) categories etc.
    let sort = "";
    let search = [];

    filters.filter((filter) => {
      if (filter.type === "search") {
        search.push(filter.value);
      }
      if (filter.type === "sort") {
        sort = filter.value;
      }
    });

    if (search.length !== 0) {
      fetchData("search", search.toString());
    }

    // we can't search by category and sort data at the same time
    if (search.length === 0 && sort) {
      sort === "Sort Ascending"
        ? fetchData("sort", "asc")
        : fetchData("sort", "desc");
    }
  }, [filters]);

  return (
    <>
      <table
        style={{
          width: "100vw",
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </td>
                <td>
                  {product.id}-{product.title}
                </td>
                <td>{`$${product.price}`}</td>
                <td>{product.category}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
