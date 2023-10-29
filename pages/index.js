import { useQuery } from "@tanstack/react-query";
import { productApi } from "api";
import Loader from "components/Loader";

function Home() {
  const { data, isLoading, error, isError, isSuccess } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async ({ signal }) => {
      return await productApi.getProducts({
        payload: {
          currentPage: 1,
          pageSize: 9,
          filters: "",
          sortField: "discountPrice",
          sortOrder: "asc",
          categoryListIds: [],
        },
        signal,
      });
    },
  });

  return (
    <div>
      <h1 className="header">
        {data?.responseData?.rows?.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </h1>
    </div>
  );
}

export default Home;
