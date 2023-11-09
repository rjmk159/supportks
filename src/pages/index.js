import { useState, useEffect } from "react";

import { BsClipboard, BsClipboard2CheckFill } from "react-icons/bs";
import Image from "next/image";

import { initGA, logPageView } from "../analytics";

const content = `Subject: Request to Add Kashmiri Language in Perso-Arabic script (Nastaliq) to Google Translation Services

Dear Google Translation Team,

We are writing to request the inclusion of the Kashmiri language in Nastaliq script into Google's translation services, along with vocal support. Kashmiri, with more than 7.1 million speakers globally, holds immense significance as one of the official languages of the Indian region of Jammu and Kashmir.

Kashmiri, written in the beautiful Nastaliq script, is deeply rooted in the rich cultural tapestry of the region. The absence of Kashmiri in Google's translation services, including vocal support, poses a significant linguistic and cultural barrier. 

Kashmir is not only a region with a rich linguistic and cultural heritage but is also an officially recognized tourist destination. The inclusion of Kashmiri in Google Translate, written in Nastaliq script, will enhance the tourist experience, foster better communication, and promote economic growth in the region. Tourists visiting Kashmir will have a more immersive experience, locals will be better able to cater to their needs, and this, in turn, will stimulate economic conditions in the area.

We are eager to collaborate with Google in this endeavor and are prepared to provide any necessary linguistic resources, documentation, and expert support to expedite the process of adding Kashmiri in Nastaliq script to Google Translate. Our community is dedicated and enthusiastic about contributing to this effort.

Furthermore, Kashmiri plays a vital role as a currency language in the Indian region of Jammu and Kashmir. Its inclusion in Google Translate, supported by vocal capabilities, will facilitate 
trade, commerce, and everyday transactions, contributing to the economic empowerment of millions of individuals who rely on this language for their livelihoods.

We're excited to help Google add Kashmiri in Nastaliq script to Translate, offering linguistic resources, expert support, and a prescribed grammar. Our dedicated community, with thousands of books, dictionaries, and a running newspaper, is enthusiastic about contributing to this effort

In our pursuit of this goal, we aim to garner support from the broader linguistic and language professional community. Here are a few email addresses of NGO’s or individuals who will be able to provide invaluable assistance in this endeavor:

amkjammukashmir@gmail.com
rjmk1359@gmail.com


We kindly request Google to initiate a dialogue with our community and these experts to discuss the process of adding Kashmiri in Nastaliq script to Google Translate, complete with vocal support. Together, we can make this vision a reality, enhancing accessibility for all.

Thank you for your attention and consideration.



`;
const link = `https://translate.google.com/`;
export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = content;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-4 max-w-sm"
        src="/kashmiri.png"
        alt="kashur Logo"
        width={180}
        height={37}
        priority
      />
      <div className="flexflex-col justify-between">
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
          <div className="flex justify-end mb-4">
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 flex"
              onClick={handleCopyClick}
            >
              {!copied ? (
                <BsClipboard className="w-5 h-5 mr-2" />
              ) : (
                <BsClipboard2CheckFill className="w-5 h-5 mr-2" />
              )}
              {copied ? "Copied!" : "Copy Complete text"}
            </button>
          </div>
          <p>
            <b>
              Subject: Request to Add Kashmiri Language in Perso-Arabic script
              (Nastaliq) to Google Translation Services
            </b>
          </p>
          <p>Dear Google Translation Team,</p>
          <p>
            {`We are writing to request the inclusion of the Kashmiri language in Nastaliq script into Google's translation services,
        along with vocal support. Kashmiri, with more than 7.1 million speakers globally, holds immense significance as one of
        the official languages of the Indian region of Jammu and Kashmir.`}
          </p>
          <p>
            {`Kashmiri, written in the beautiful Nastaliq script, is deeply rooted in the rich cultural tapestry of the region. The absence
        of Kashmiri in Google's translation services, including vocal support, poses a significant linguistic and cultural barrier.`}
          </p>
          <p>
            Kashmir is not only a region with a rich linguistic and cultural
            heritage but is also an officially recognized tourist destination.
            The inclusion of Kashmiri in Google Translate, written in Nastaliq
            script, will enhance the tourist experience, foster better
            communication, and promote economic growth in the region. Tourists
            visiting Kashmir will have a more immersive experience, locals will
            be better able to cater to their needs, and this, in turn, will
            stimulate economic conditions in the area.
          </p>
          <p>
            We are eager to collaborate with Google in this endeavor and are
            prepared to provide any necessary linguistic resources,
            documentation, and expert support to expedite the process of adding
            Kashmiri in Nastaliq script to Google Translate. Our community is
            dedicated and enthusiastic about contributing to this effort.
          </p>
          <p>
            Furthermore, Kashmiri plays a vital role as a currency language in
            the Indian region of Jammu and Kashmir. Its inclusion in Google
            Translate, supported by vocal capabilities, will facilitate trade,
            commerce, and everyday transactions, contributing to the economic
            empowerment of millions of individuals who rely on this language for
            their livelihoods.
          </p>
          <p>
            We're excited to help Google add Kashmiri in Nastaliq script to
            Translate, offering linguistic resources, expert support, and a
            prescribed grammar. Our dedicated community, with thousands of
            books, dictionaries, and a running newspaper, is enthusiastic about
            contributing to this effort
          </p>
          <p>
            In our pursuit of this goal, we aim to garner support from the
            broader linguistic and language professional community. Here are a
            few email addresses of NGO’s or individuals who will be able to
            provide invaluable assistance in this endeavor:
          </p>
          <ul>
            <li>
              <b>amkjammukashmir@gmail.com</b>
            </li>
            <li>
              <b>rjmk1359@gmail.com</b>
            </li>
          </ul>
          <p>
            kindly request Google to initiate a dialogue with our community and
            these experts to discuss the process of adding Kashmiri in Nastaliq
            script to Google Translate, complete with vocal support. Together,
            we can make this vision a reality, enhancing accessibility for all.
          </p>
          <p>Thank you for your attention and consideration.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md mt-12">
          <p>
            <b>Steps to submit feedback to google to add Kashmiri Language</b>
          </p>
          <ul>
            <li>
              <b>Step 1:</b> Copy the Above Content
            </li>
            <li>
              <b>Step 2:</b> Visit Google Translate Website
              <br /> Open your web browser and go to Google Translate.{" "}
              <a className="text-blue-500 underline" href={link}>
                Link
              </a>
            </li>
            <li>
              {" "}
              <b>Step 3:</b> Click Send Feedback as shown
              <span className="flex justify-center">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-4 mt-4 max-w-sm border-2 border-blue-500"
                  src="/one.png"
                  alt="kashur Logo"
                  width={400}
                  height={500}
                  priority
                />
              </span>
            </li>
            <li>
              {" "}
              <b>Step 4:</b> Paste the copied content and click Send
              <span className="flex justify-center">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-4 mt-4 max-w-sm border-2 border-blue-500"
                  src="/two.png"
                  alt="kashur Logo"
                  width={400}
                  height={500}
                  priority
                />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <footer className="border-t border-gray-300 p-4 text-center w-full mt-24">
      <p className="text-gray-600">
        We are promoting the language without endorsing any religious or
        political views. This website is not for profit; it is solely intended
        to provide text sample and to submit feedback.
      </p>
    </footer>
    </main>
  );
}
