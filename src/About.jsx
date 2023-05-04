import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {



    return (
        <section className="about" id="about">
            <div className="about-title">
                <h2><span className="orange">Saiba</span> mais</h2>
            </div>
            <p className="about-text">
                Este é um projeto com o objetivo de criar um e-commerce, inspirado no meu estudo de
                <span className="orange"> React</span>.
            </p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/guilherme-estevan/" target="blank">
                    <FaLinkedin className="linkedin" />
                </a>
                <a href="https://github.com/GuilhermeEstevan" target="blank">
                    <FaGithub className="github" />
                </a>
            </div>
        </section>
    )
}
export default About