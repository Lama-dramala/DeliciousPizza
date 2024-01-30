import React from "react";
import ContentLoader from "react-content-loader";

export default function PizzaSkeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={240}
      height={457}
      viewBox="0 0 240 457"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="115" cy="115" r="115" />
      <rect x="0" y="255" rx="0" ry="0" width="240" height="20" />
      <rect x="0" y="295" rx="0" ry="0" width="240" height="85" />
      <rect x="0" y="405" rx="0" ry="0" width="80" height="26" />
      <rect x="109" y="395" rx="30" ry="30" width="133" height="46" />
    </ContentLoader>
  );
}
