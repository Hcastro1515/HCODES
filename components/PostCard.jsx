import React from "react";
import Link from "next/link";
import moment from "moment";
import Image from "next/image";
import { motion } from "framer-motion";
import { grpahCMSImageLoader } from "../utils";

const PostCard = ({ post }) => {
  console.log(post);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      variants={variants}
    >
      <div className="post-card flex flex-col rounded overflow-hidden lg:w-96 mb-4">
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
          <h1 className=" text-2xl  font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-bl from-green-500 to-blue-900 hover:cursor-pointer hover:text-black transition-colors ease">
            <span className="link-underline link-underline-black">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </span>
          </h1>

          <p className="text-lg text-gray-600 leading-7 mb-4">{post.excerpt}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
