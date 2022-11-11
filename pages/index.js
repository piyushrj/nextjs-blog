import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Head from "next/head";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Piyush's Blog</title>
                <meta
                    name="description"
                    content="I post about programming"
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;