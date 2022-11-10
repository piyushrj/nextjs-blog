import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
    const postFiles = fs.readdirSync(postsDirectory);
    return postFiles;
}

export function getPostData(fileIdentifier) {
    const postSlug = fileIdentifier.replace(/\.md$/, ""); // removes the file extention if present
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}