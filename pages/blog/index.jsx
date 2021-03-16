import React, { Fragment } from 'react'
import Link from 'next/link'
import Navbar from '../../components/nav/navigation-bar'

const IndexPage = (props) => {
  console.log(props.blogs)
  return (
    <Fragment>
      <Navbar />
      <section className="container-fluid h-100">
        <h1 className="text-white text-center mt-4">My Blog</h1>
        <div className="container">      
          <ul className="blog-list">
            {
              props.blogs.map((blog) => {
                return (
                  <li key={blog.id} className="blog-item">
                    <Link href={`/blog/${blog.slug}`}>
                      <a>{blog.title}</a>
                    </Link>
                      <p className="blog-author">Author: {blog.author}</p>
                      <p className="blog-date">Date: {blog.date}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </Fragment>
  )
}

// This function gets called at build time on server-side.
export async function getStaticProps() {
  const fs = require("fs");
  const matter = require("gray-matter");
  const { v4: uuid } = require("uuid");

  const files = fs.readdirSync(`${process.cwd()}/post`, "utf-8");

  const blogs = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => {
      const path = `${process.cwd()}/post/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: "utf-8",
      });
      const { data } = matter(rawContent);

      return { ...data, id: uuid() };
    });

    // By returning { props: blogs }, the IndexPage component
  // will receive `blogs` as a prop at build time
  return {
    props: { blogs },
  };
}

export default IndexPage