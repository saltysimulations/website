import { FC } from "react";

const CodeOfConduct: FC = () => (
    <div className="text-white">
        <header className="w-full h-72 bg-gradient-to-r from-frenchviolet via-amethyst to-celeste flex items-center justify-center">
            <div className="font-raleway text-6xl md:text-7xl w-4/5 md:w-3/5 md:whitespace-nowrap">
                <h1>code of conduct</h1>
            </div>
        </header>
        <section className="bg-gray-800 w-full flex justify-center">
            <div className="w-4/5 md:w-3/5 my-16">
                <CocHeader text="our pledge" />
                <p className="py-4 mb-6">
                    In the interest of fostering an open and welcoming environment,
                    we as contributors and maintainers pledge to making participation in our project
                    and our community a harassment-free experience for everyone, regardless of age,
                    body size, disability, ethnicity, sex characteristics, gender identity and expression,
                    level of experience, education, socio-economic status, nationality, personal appearance,
                    race, religion, or sexual identity and orientation.
                </p>
                <CocHeader text="our standards" />
                <p className="py-4">
                    Examples of behavior that contributes to creating a positive environment include:
                </p>
                <ul className="list-disc list-inside ml-3">
                    <li>Using welcoming and inclusive language</li>
                    <li>Being respectful of differing viewpoints and experiences</li>
                    <li>Gracefully accepting constructive criticism</li>
                    <li>Focusing on what is best for the community</li>
                    <li>Showing empathy towards other community members</li>
                </ul>
                <p className="py-4">
                    Examples of unacceptable behavior by participants include:
                </p>
                <ul className="list-disc list-inside ml-3 mb-10">
                    <li>The use of sexualized language or imagery and unwelcome sexual attention or advances</li>
                    <li>Trolling, insulting/derogatory comments, and personal or political attacks</li>
                    <li>Public or private harassment</li>
                    <li>Publishing others' private information, such as a physical or electronic address, without explicit permission</li>
                    <li>Other conduct which could reasonably be considered inappropriate in a professional setting</li>
                </ul>
                <CocHeader text="our responsibilities" />
                <p className="py-4 mb-6">
                    Project maintainers are responsible for clarifying the standards of acceptable behavior and
                    are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

                    Project maintainers have the right and responsibility to remove, edit, or reject comments,
                    commits, code, wiki edits, issues, and other contributions that are not aligned to this
                    Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors
                    that they deem inappropriate, threatening, offensive, or harmful.
                </p>
                <CocHeader text="scope" />
                <p className="py-4 mb-6">
                    This Code of Conduct applies both within project spaces and in public spaces when an
                    individual is representing the project or its community. Examples of representing a project
                    or community include using an official project e-mail address, posting via an official social
                    media account, or acting as an appointed representative at an online or offline event.
                    Representation of a project may be further defined and clarified by project maintainers.
                </p>
                <CocHeader text="enforcement" />
                <p className="py-4 mb-6">
                    Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting
                    the project team at <a className="text-amethyst" href="mailto:contact@saltysimulations.com">contact@saltysimulations.com</a>.
                    All complaints will be reviewed and investigated and will result in a response that is deemed necessary
                    and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard
                    to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

                    Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary
                    or permanent repercussions as determined by other members of the project's leadership.
                </p>
                <CocHeader text="attribution" />
                <p className="py-4">
                    This Code of Conduct is adapted from the <a className="text-amethyst" href="https://www.contributor-covenant.org/">Contributor Covenant</a>,
                    version 1.4, available at <a className="text-amethyst" href=
                        "https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</a> For
                    answers to common questions about this code of conduct,
                    see <a className="text-amethyst" href="https://www.contributor-covenant.org/faq">https://www.contributor-covenant.org/faq</a>
                </p>
            </div>
        </section>
    </div>
);

const CocHeader: FC<{ text: string }> = ({ text }) => (
    <h2 className="text-4xl pb-4 border-b-2 border-gray-700 font-raleway">{text}</h2>
);

export default CodeOfConduct;