import { FC } from "react";
import { TextHeader } from "../components/TextHeader";

const Privacy: FC = () => (
    <div className="text-white">
        <header className="w-full h-72 bg-gradient-to-r from-frenchviolet via-amethyst to-celeste flex items-center justify-center">
            <div className="font-raleway text-6xl md:text-7xl w-4/5 md:w-3/5 md:whitespace-nowrap">
                <h1>privacy policy</h1>
            </div>
        </header>
        <section className="bg-gray-800 w-full flex justify-center">
            <div className="w-4/5 md:w-3/5 my-16">
                <TextHeader text="about" />
                <p className="py-4">Effective July 01, 2021</p>
                <p className="py-4 mb-6">
                    This privacy policy describes Salty Simulations’ (“us”,
                    “we”, “our”, “Salty”) policies on the collection, use and
                    disclosure of your information when you use the website.
                </p>
                <TextHeader text="what data do we collect?" />
                <p className="py-4">
                    Certain types of data may be collected automatically when
                    using the website. This may include information such as:
                </p>
                <ul className="list-disc list-inside ml-3 mb-10">
                    <li>Your device’s IP address</li>
                    <li>Browser type and version</li>
                    <li>Other diagnostic data</li>
                </ul>
                <TextHeader text="retention of your data" />
                <p className="py-4 mb-6">
                    We may store your data for as long as it is necessary or if
                    we are required to by law. We do not store your data for any
                    longer than is strictly necessary.
                </p>
                <TextHeader text="disclosure of information" />
                <p className="py-4">
                    The data that is collected about you may be disclosed in the
                    good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc list-inside ml-3 mb-10">
                    <li>Comply with a legal obligation</li>
                    <li>Protect against legal liability</li>
                    <li>Protect the personal safety of our users</li>
                </ul>
                <TextHeader text="security of your data" />
                <p className="py-4 mb-6">
                    The security of your data is very important to us. However,
                    no method of transmission over the internet or method of
                    electronic storage is 100% secure. Therefore, we cannot
                    guarantee your data’s absolute security.
                </p>
                <TextHeader text="children's privacy" />
                <p className="py-4 mb-6">
                    Our website does not address anyone under the age of 13.
                    Salty does not knowingly collect personally identifiable
                    information from anyone under the age of 13.
                </p>
                <TextHeader text="links to other websites" />
                <p className="py-4 mb-6">
                    Our website contains links to other websites that are not
                    operated by us. We strongly advise you to review the privacy
                    policies of the sites you visit We have no control over and
                    assume no responsibility for the privacy policies of third
                    party websites.
                </p>
                <TextHeader text="questions?" />
                <p className="py-4 mb-6">
                    In case of any inquiries, please direct them to{" "}
                    <a
                        className="text-amethyst"
                        href="mailto:contact@saltysim.com"
                    >
                        contact@saltysim.com
                    </a>
                    .
                </p>
            </div>
        </section>
    </div>
);

export default Privacy;
