import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "/metadata/getPostMetadata";
const getPostContent = (slug) => {
    const folder = "Blog/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content)
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div  className="text-white pt-40 w-full">
            <img src={post.data.image} />
            <h1 className="text-center">{post.data.title}</h1>
            <article className="prose lg:prose-xl prose-headings:text-white prose-a:text-blue-400 text-gray-400 m-auto ">
                <Markdown className="">{post.content}</Markdown>
            </article>
            
        </div>
        
        
    )
}

export default PostPage;