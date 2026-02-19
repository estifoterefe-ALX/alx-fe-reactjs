import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function PostsComponent() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["fetchPosts"],
    queryFn: () => axios.get("https://jsonplaceholder.typicode.com/posts"),
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
    refetchOnWindowFocus: true, // Refetch when window is focused
    keepPreviousData: true, // Keep previous data while fetching new data
  });
  console.log(data);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data?.data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default PostsComponent;
