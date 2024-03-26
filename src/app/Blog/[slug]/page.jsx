import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import { IoArrowBackOutline } from "react-icons/io5";
import getPostMetadata from "/metadata/getPostMetadata";
import Link from "next/link";
const getPostContent = (slug) => {
  const folder = "Blog/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="text-white pt-40 xl:w-full xxs:px-3 md:px-0">
      <div className="pb-14 md:px-24 flex">
        <button className="flex gap-2 text-xl text-[#18181A] px-3 py-3 bg-[#2E2E2E] hover:border hover:border-zinc-300 rounded-full ">
            <Link href={"/Blog"}>
            <IoArrowBackOutline />
            </Link>
          
        </button>
      </div>

      <img src={post.data.image} className="m-auto rounded-xl" />
      <div className="md:w-5/6 m-auto md:pl-5 border-blue">
        <h1 className=" text-5xl font-poppins font-bold pt-5">
          {post.data.title}
        </h1>
        <p className="pt-3 text-sm text-gray-600">{post.data.date}</p>
        <div className="flex gap-5 pt-3">
          <img
            src={post.data.profimage}
            alt=""
            className="w-12 rounded-full  hover:border hover:border-zinc-800"
          />
          <div>
            <p>Raihan Rahmadian</p>
            <p>@investekor</p>
          </div>
        </div>
      </div>

      <article className="prose lg:prose-xl prose-headings:text-white prose-a:text-blue-400 text-gray-400 m-auto ">
        <Markdown className="">{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
