
type Post = {
  content: string;
  author: string;
};

export function Post(props: Post) {
  return (
    <div className="bg-amber-300">
      <strong className="bg-indigo-300">{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}
