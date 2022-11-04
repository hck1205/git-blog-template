export default function PostPage({
  params,
}: {
  params: { category: string[] };
}) {
  const [category, topic] = params.category;

  console.log({ category, topic });

  return <p>Post: </p>;
}
