import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);

  return <p>Post: </p>;
}
