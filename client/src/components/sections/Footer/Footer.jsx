import Container from "../../layout/Container";

function Footer() {
    return (
        <footer className="py-20">

            <Container>

                <div
                    className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        p-8
                    "
                >

                    <h2 className="text-2xl font-bold text-white">
                        Shivam Bagwari
                    </h2>

                    <p className="mt-3 text-white/50">
                        Building thoughtful digital experiences.
                    </p>

                    <div className="mt-10 flex gap-6">

                        <a href="#">
                            GitHub
                        </a>

                        <a href="#">
                            LinkedIn
                        </a>

                        <a href="#">
                            X
                        </a>

                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">

                        <p className="text-sm text-white/40">

                            © 2026 Shivam Bagwari.
                            All rights reserved.

                        </p>

                    </div>

                </div>

            </Container>

        </footer>
    );
}

export default Footer;