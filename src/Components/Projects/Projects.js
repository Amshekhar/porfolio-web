import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProductCard/ProductCard";
import projImg1 from "../../Assetes/img/easemytrip.png";
import projImg2 from "../../Assetes/img/croma.png";
import projImg3 from "../../Assetes/img/sidcup.png";
import music from "../../Assetes/img/Music-app-with-nextjs.png";
import colorSharp2 from "../../Assetes/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Ease My Trip",
            description: "A Toure & Travel Agency",
            imgUrl: projImg1,
        },
        {
            title: "Croma Elecronics",
            description: "Electronic Item Eccommerce Site",
            imgUrl: projImg2,
        },
        {
            title: "Sidcup Golf",
            description: "A Golf Website Clone",
            imgUrl: projImg3,
        },
        {
          title: "Music",
          description: "Learn basic of next.js/Typescript and use of an animated components library",
          imgUrl: music,
        },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg2,
        // },
        // {
        //   title: "Business Startup",
        //   description: "Design & Development",
        //   imgUrl: projImg3,
        // },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Welcome to the project showcase section of my portfolio! Here, you will find a selection of my most recent and impactful work. Each project reflects my dedication to creating high-quality web applications and my proficiency in various web technologies. Explore the details of these projects below:</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Highlight</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Important Links</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Description</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div className="links">
                                                    <div>
                                                        <h4>Project: EaseMyTrip</h4>
                                                        <ul>
                                                            <li><a href="https://github.com/Amshekhar/EaseMyTrip-Clone---React-Project-2---0sz0ysxowkcy">Code link</a></li>
                                                            <li><a href="https://ease-my-trip-by-shekhar.vercel.app/">Hosted link</a></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4>Project: Croma Elecronics</h4>
                                                        <ul>
                                                            <li><a href="https://github.com/Amshekhar/Croma-Electronics-Clone---React-Project-1---bbo83avz7nyu">Code link</a></li>
                                                            <li><a href="https://croma-electronics-clone-react-project-1-bbo83avz7nyu.vercel.app/">Hosted link</a></li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4>Project: Sidcup Family Golf</h4>
                                                        <ul>
                                                            <li><a href="https://github.com/Amshekhar/Sidcup-Family-Golf-clone-by-Shekhar">Code link</a></li>
                                                            <li><a href="https://sidcup-family-golf-clone-by-shekhar.vercel.app/">Hosted link</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <div>
                                                    <div className="boundary">
                                                        <h4>EaseMyTrip</h4>
                                                        <ul>
                                                            <li><strong>User Authentication:</strong> Secure signup, login.</li>
                                                            <li><strong>Destination Listings:</strong> Browse and explore detailed destination options.</li>
                                                            <li><strong>Travel Packages:</strong> View and select various travel packages.</li>
                                                            <li><strong>Booking System:</strong> Book flights, hotels, train, bus, and travel packages easily.</li>
                                                            <li><strong>Payment Integration:</strong> Secure payment gateway for seamless transactions.</li>
                                                            <li><strong>Search and Filter:</strong> Quickly find destinations, packages, or services.</li>
                                                            <li><strong>Technical Skills:</strong> React, JavaScript, HTML, CSS, Tailwind CSS.</li>
                                                            <li><strong>Key Findings:</strong> Component-based architecture and Tailwind CSS boost efficiency. Effective state management is vital.</li>
                                                            <li><strong>Insights:</strong> Enhanced modular development, responsive design, and debugging.</li>
                                                            <li><strong>Project Impact:</strong> Improved front-end skills, strong portfolio piece, real-world experience.</li>
                                                        </ul>

                                                    </div>

                                                    <div  className="boundary">
                                                        <h4>Croma Elecronics</h4>
                                                        <ul>
                                                            <li><strong>Objective & Scope:</strong> Developed a functional clone of the Croma electronics website using React to implement key e-commerce features like product listings, detailed pages, shopping cart, and user authentication.</li>

                                                            <li><strong>Features:</strong>
                                                                <ul>
                                                                    <li><strong>User Authentication:</strong> Signup, login, and account management.</li>
                                                                    <li><strong>Product Listings:</strong> Browse electronic products.</li>
                                                                    <li><strong>Product Details:</strong> View product information and specifications.</li>
                                                                    <li><strong>Shopping Cart:</strong> Add, update, and remove products.</li>
                                                                    <li><strong>Checkout Process:</strong> Secure and user-friendly checkout.</li>
                                                                    <li><strong>Order Management:</strong> Track order history and details.</li>
                                                                    <li><strong>User Profiles:</strong> Manage personal info and order history.</li>
                                                                    <li><strong>Search and Filter:</strong> Search products and apply filters.</li>
                                                                    <li><strong>Product Reviews:</strong> Read and write reviews.</li>
                                                                </ul>
                                                            </li>

                                                            <li><strong>Technical Skills:</strong> Proficient in React (components, state management, hooks), JavaScript (ES6+), HTML, CSS, and Tailwind CSS.</li>

                                                            <li><strong>Key Findings:</strong> React's component-based architecture and Tailwind CSS enhance development efficiency. Effective state management is crucial for a responsive UI.</li>
                                                        </ul>

                                                    </div>
                                                    <div className="boundary">
                                                        <h4>Sidcup Family Golf</h4>
                                                        <ul>
                                                            <li><strong>Responsive Design:</strong> Ensures a seamless user experience across all devices.</li>
                                                            <li><strong>Interactive Elements:</strong> Dynamic navigation, image sliders, and JavaScript.</li>
                                                            <li><strong>Clean Layout:</strong> Intuitive structure for easy navigation and information access.</li>
                                                            <li><strong>CSS Animations and Transitions:</strong> Enhances visual appeal and user feedback.</li>
                                                            <li><strong>Image Gallery:</strong> Displays the golf courses and facilities visually.</li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}