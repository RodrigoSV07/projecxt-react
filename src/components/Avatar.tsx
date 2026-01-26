type avatar = {
  src: string;
  alt?: string;
  
}

export function Avatar({ src, alt = "avatar"}: avatar) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-12 h-12 border border-green-400 rounded-md"
    />
  );
}
