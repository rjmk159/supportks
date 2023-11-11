import { useState, useEffect } from "react";

import { BsClipboard, BsClipboard2CheckFill } from "react-icons/bs";
import Image from "next/image";
import * as amplitude from "@amplitude/analytics-browser";

import { initGA, logPageView } from "../analytics";

const content = `Subject: Request to Add Kashmiri Language in Perso-Arabic script (Nastaliq) to Google Translation Services

Dear Google Translation Team,

We are writing to request the inclusion of the Kashmiri language in institutionally approved Nastaliq script into Google's translation services, along with vocal support. Kashmiri, with more than 7.1 million speakers globally.

As per records available on different google platforms, Kashmiri is 5000 years old language and has strong literary traditions of about 8 Centuries. A few languages in the contemporary times enjoy the history of being so old. It is elder to many languages of the Indo Iranian and Indo Aryan origin. This language has a strong vocabulary system and can cater the demands of technological era. Besides Jammu and Kashmir, it is spoken in many parts of subcontinent and different parts of the world by Kashmiri diaspora. with rich literary traditions and strong cultural bonds this language has played a vital role in promoting human values ,peace ,interfaith harmony and high standards of literature writing .

Kashmiri, is deeply rooted in the rich cultural tapestry of the region. The absence of Kashmiri in Google's translation services, including vocal support, poses a significant linguistic and cultural barrier.

Kashmir is not only a region with a rich linguistic and cultural heritage but is also an officially recognized tourist destination. The inclusion of Kashmiri in Google Translate will enhance the tourist experience, foster better communication, and promote economic growth in the region. Tourists visiting Kashmir will have a more immersive experience, locals will be better able to cater to their needs, and this, in turn, will stimulate economic conditions in the area.

We are eager to collaborate with Google in this endeavor and are prepared to provide any necessary linguistic resources, documentation, and expert support to expedite the process of adding Kashmiri in Nastaliq script to Google Translate. Our community is dedicated and enthusiastic about contributing to this effort.

Furthermore, Kashmiri plays a vital role as a currency language in Jammu and Kashmir. Its inclusion in Google Translate, supported by vocal capabilities, will facilitate trade, commerce, and everyday transactions, contributing to the economic empowerment of millions of individuals who rely on this language for their livelihoods.

We're excited to help Google add Kashmiri to Translate, offering linguistic resources, expert support, and a prescribed grammar. Our dedicated community, with thousands of books, dictionaries, and a running newspaper, is enthusiastic about contributing to this effort

In our pursuit of this goal, we aim to garner support from the broader linguistic and language professional community. Here are a few email addresses of NGO’s or individuals who will be able to provide invaluable assistance in this endeavor

amkjammukashmir@gmail.com
rjmk1359@gmail.com


We kindly request Google to initiate a dialogue with our community and these experts to discuss the process of adding Kashmiri in Nastaliq script to Google Translate, complete with vocal support. Together, we can make this vision a reality, enhancing accessibility for all.


Thank you for your attention and consideration.



`;
const link = `https://translate.google.com/`;
export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy =  content.replace(/%20/g, ' ');
    navigator.clipboard.writeText(decodeURIComponent(textToCopy));
    
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    amplitude.track("CopyClicked");
  };

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  useEffect(() => {
    amplitude.init("503e6a3506e0eb2bf882ac730918f490");
    amplitude.track("PageVisited");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:m-20">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-4 max-w-sm"
        src="/kashmiri.png"
        alt="kashur Logo"
        width={180}
        height={37}
        priority
      />
      <div className="max-w-600">
        <h2 className="text-2xl font-bold mb-4 text-center p-6 ">
          Copy the text below and follow the steps to submit your request to
          Google to Add Kashmiri Language to Google Translation Services.
          <br />
          <div
            className="bg-yellow-200 border-l-4 border-yellow-400 text-yellow-800 p-2 mt-2"
            role="alert"
          >
            <p className="leading-6">
              نیچے دیے گئے مواد کو کاپی کریں اور گوگل ٹرانسلیشن سروسز میں کشمیری
              میں شامل کرنے کے لیے گوگل کو اپنی درخواست جمع کرانے کے لیے اقدامات
              پر عمل کریں۔
            </p>
          </div>
        </h2>
      </div>
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
              {copied ? "Copied!" : "Click here to Copy Complete text"}
            </button>
          </div>
          <p>
            <b>
              Subject: Request to Add Kashmiri Language its approved script
              (Nastaliq) to Google Translation Services
            </b>
          </p>
          <p>Dear Google Translation Team,</p>
          <p>
            We are writing to request the inclusion of the Kashmiri language in
            institutionally approved Nastaliq script into Google's translation
            services, along with vocal support. Kashmiri, with more than 7.1
            million speakers globally.
          </p>
          <p>
            As per records available on different google platforms, Kashmiri is
            5000 years old language and has strong literary traditions of about
            8 Centuries. A few languages in the contemporary times enjoy the
            history of being so old. It is elder to many languages of the Indo
            Iranian and Indo Aryan origin. This language has a strong vocabulary
            system and can cater the demands of technological era. Besides Jammu
            and Kashmir, it is spoken in many parts of subcontinent and
            different parts of the world by Kashmiri diaspora. with rich
            literary traditions and strong cultural bonds this language has
            played a vital role in promoting human values ,peace ,interfaith
            harmony and high standards of literature writing .
          </p>
          <p>
            Kashmiri, is deeply rooted in the rich cultural tapestry of the
            region. The absence of Kashmiri in Google's translation services,
            including vocal support, poses a significant linguistic and cultural
            barrier.{" "}
          </p>
          <p>
            Kashmir is not only a region with a rich linguistic and cultural
            heritage but is also an officially recognized tourist destination.
            The inclusion of Kashmiri in Google Translate will enhance the
            tourist experience, foster better communication, and promote
            economic growth in the region. Tourists visiting Kashmir will have a
            more immersive experience, locals will be better able to cater to
            their needs, and this, in turn, will stimulate economic conditions
            in the area.
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
            Jammu and Kashmir. Its inclusion in Google Translate, supported by
            vocal capabilities, will facilitate trade, commerce, and everyday
            transactions, contributing to the economic empowerment of millions
            of individuals who rely on this language for their livelihoods.
          </p>
          <p>
            We're excited to help Google add Kashmiri to Translate, offering
            linguistic resources, expert support, and a prescribed grammar. Our
            dedicated community, with thousands of books, dictionaries, and a
            running newspaper, is enthusiastic about contributing to this effort
          </p>
          <p>
            In our pursuit of this goal, we aim to garner support from the
            broader linguistic and language professional community. Here are a
            few email addresses of NGO’s or individuals who will be able to
            provide invaluable assistance in this endeavor
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
            We kindly request Google to initiate a dialogue with our community
            and these experts to discuss the process of adding Kashmiri in
            Nastaliq script to Google Translate, complete with vocal support.
            Together, we can make this vision a reality, enhancing accessibility
            for all.
          </p>
          <p>Thank you for your attention and consideration.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md mt-12">
          <p className="text-xl text-center">
            <b>Steps to submit feedback to google to add Kashmiri Language</b>
            <br />
          </p>
          <div
            className="bg-yellow-200 border-l-4 border-yellow-400 text-yellow-800 p-2 mt-2 mb-4"
            role="alert"
          >
            <p className="text-center leading-6">
              کشمیری زبان کو شامل کرنے کے لیے گوگل کو فیڈ بیک جمع کرنے کے
              اقدامات
            </p>
          </div>

          <ul>
            <li>
              <b>Step 1:</b> Copy the above Content
            </li>
            <li>
              <b>Step 2:</b> Visit Google Translate Website
              <br /> Open your web browser and go to Google Translate.{" "}
              <a
                className="text-blue-500 underline"
                onClick={() => {
                  amplitude.track("GoogleLinkOpened");
                }}
                href={link}
              >
                Link
              </a>
            </li>
            <li>
              {" "}
              <b>Step 3:</b> Click Send Feedback as shown
              <span className="flex justify-center">
                <Image
                  className=" max-w-full md:max-w-500 sm:max-w-full lg:max-w-500 -mx-2  mt-4 border-2 border-blue-500"
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
                  className="max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full 2xl:max-w-full -mx-2 mt-4 border-2 border-blue-500"
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
          to provide text feedback message and steps to submit feedback.
        </p>
      </footer>
    </main>
  );
}
