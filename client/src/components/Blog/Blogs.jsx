import Container from "../layout/Container"
import blogs from "../../data/blogs";
import SectionHeader from "../ui/SectionHeader";
import BlogCard from "./BlogCard";

function Blogs() {
    return (
        <section
            id="blogs"
            className="pt-10 pb-8"
        >
            <Container>

                <SectionHeader
                    number="05"
                    title="Blogs"
                />

                <div className="mt-10 space-y-4">

                    {blogs
                        .filter((blog) => blog.featured)
                        .slice(0, 2)
                        .map((blog) => (
                            <BlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))}

                </div>

                <p
                    className="
                    mt-8
                    text-center
                    text-sm
                    tracking-wide
                    text-white/32
                    "
                >
                    More articles coming soon.
                </p>

            </Container>
        </section>
    );
}

export default Blogs;