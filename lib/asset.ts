// Prefix public/ asset paths with the base path (set when deploying to GitHub Pages).
export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
