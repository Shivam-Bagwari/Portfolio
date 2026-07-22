
import blogs from "../../data/blogs";
import SectionHeader from "../ui/SectionHeader";
import BlogCard from "./BlogCard";

function Blogs() {
    return (
        <section
            id="blogs"
            className="relative mx-auto w-full max-w-4xl px-10 py-10"
        >
            <SectionHeader
                number="06"
                title="Blogs"
            />

            <div className="mt-12 space-y-6">

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


            {/* Bottom CTA */}

            <div className="mt-8 flex justify-center">
                <p className="text-sm tracking-wide text-white/40">
                    More articles coming soon.
                </p>
            </div>
        </section>
    );
}

export default Blogs;