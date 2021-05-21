import Link from 'next/link'
import {Navbar, Footer} from '../../components'

const IndexPage = (props) => {

  const sort_post_by_dates = props.blogs
    .sort((start_date, end_date) => new Date(end_date.date) - new Date(start_date.date))

  return (
    <>
    <Navbar />
      <section className="container blog">
        <h1 className="text-white text-center mt-4 blog__title">My Blog</h1>
        <div className="container">      
          <ul className="blog-list">
            {
              sort_post_by_dates.map(blog => {
                return (
                  <li key={blog.id} className="blog-item">
                    <Link href={`/blog/${blog.slug}`}>
                      <a>{blog.title}</a>
                    </Link>
                      <p className="blog-date">Date: {blog.date}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <Footer />
    </>
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