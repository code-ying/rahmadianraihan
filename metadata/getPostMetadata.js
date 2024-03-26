import fs from "fs"
import matter from "gray-matter";

const getPostMetadata = ()  => {
    const folder = "Blog/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`Blog/${fileName}`, "utf-8");
      const matterResult = matter(fileContents);
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        image: matterResult.data.image,
        profimage: matterResult.data.profimage,
        slug: fileName.replace(".md", ""),
      };
    });
    return posts;
  }
  export default getPostMetadata;