import React from "react";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Image } from "next/image";

const PostDetail = ({ post }) => {
  const content = post.content.raw.children;
  return (
    <div className="lg:p-8 pb-12 mb-8 lg:max-w-4xl m-auto">
      <div className="px-4 lg:px-8">
        <h1 className="mb-8 text-4xl font-semibold">{post.title}</h1>

        <p className="text-gray-400 my-5">
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </p>

        <div className="sm:mb-6 md:mb-12 image-container">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="postImg"
          />
        </div>

        <RichText
          content={content}
          renderers={{
            img: ({ src, altText, height, width }) => (
              <Image
                src={src}
                alt={altText}
                height={height}
                width={width}
                objectFit="fill"
              />
            ),
            h1: ({ children }) => (
              <h1 className="text-3xl font-semibold mb-4">{children}</h1>
            ),
            h2: ({ children }) => (
              <h1 className="text-1xl font-semibold mb-4">{children}</h1>
            ),
            h3: ({ children }) => (
              <h1 className="text-xl font-semibold mb-4">{children}</h1>
            ),
            h4: ({ children }) => (
              <h1 className="text-lg font-semibold mb-4">{children}</h1>
            ),
            p: ({ children }) => <p className="mb-8">{children}</p>,
            ul: ({ children }) => <ul className="ml-4 mb-5">{children}</ul>,
            li: ({ children }) => (
              <li className="list-disc ml-8">{children}</li>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default PostDetail;
