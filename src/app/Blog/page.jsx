import Link from "next/link";
import getPostMetadata from "../../../metadata/getPostMetadata";
const Blog = () => {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => {
    return (
      <div className="px-5">
        <div className="px-5 py-5 rounded-xl hover:bg-white/5 ease-in duration-200 2xl:w-6/12 lg:w-6/12 md:w-8/12">
          <Link href={`/Blog/${post.slug}`} className=" md:grid md:grid-cols-2 gap-2">
             <div className="2xl:w-5/6  relative">
              <img src={post.image} className="rounded-lg" alt="" />
            </div>
            <div className="w-6/6 flex flex-col justify-between xxs:pt-3 md:pt-0">
              <h2 className="font-poppins text-md ">{post.title}</h2>
              <p className="font-roboto text-sm text-gray-400">
                {post.subtitle}
              </p>
              <p className="text-sm text-green-500 hover:text-green-300 ease-in duration-200 ">
                Read more
              </p>
            </div>
           
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="text-white">
      <div className="py-20 px-5 font-poppins font-bold text-4xl w-4/6">
        Writing for personal reflections about life and software designs
      </div>
      <div className="w-11/12 border-t border-zinc-700 m-auto pb-20">

      </div>
      {postPreviews}
    </div>
  );
};

export default Blog;