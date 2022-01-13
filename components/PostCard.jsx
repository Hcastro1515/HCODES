import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className=" flex flex-col rounded overflow-hidden lg:w-96 mb-4">
      <div className="container h-auto">
        <img
          className="bg-contain w-full h-full"
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>

      <div className=" rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-5">
        <p className="text-gray-600 my-3">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        <h1 className="text-2xl  font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-bl from-green-500 to-blue-900 hover:cursor-pointer hover:text-black transition-colors ease hover:underline">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>

        <p className="text-lg text-gray-600 leading-7 mb-4">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
