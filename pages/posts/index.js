import AllPosts from "../../components/posts/all-posts";
import Head from "next/head";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";

function AllPostsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A list of all programming tutorials and posts." />
            </Head>
            <AllPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;