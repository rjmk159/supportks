import { useState, useEffect, useRef } from "react";

import {
  BsClipboard,
  BsClipboard2CheckFill,
  BsFileEarmarkWordFill,
  BsFileEarmarkPdf,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import Image from "next/image";
import * as amplitude from "@amplitude/analytics-browser";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "@/omponents/Modal";

import { initGA, logPageView } from "../analytics";
import ThumbsForm from "@/omponents/Form";
import { content } from "@/omponents/content";

const link = `https://translate.google.com/`;
export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const helpRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    amplitude.track("CopyClicked");
  };

  const handleToggleVideo = () => {
    setShowVideo((curr) => !curr);
    amplitude.track("WatchVideoClicked_SK");
  };
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  useEffect(() => {
    amplitude.init("503e6a3506e0eb2bf882ac730918f490", {
      defaultTracking: true,
    });
    amplitude.track("PageVisited");
  }, []);

  const handleOpenModal = () => {
    amplitude.track("ViewedContent_SK");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    amplitude.track("ClosedContent_SK");
  };
  const handleSubmitFeedback = async (val, message) => {
    amplitude.track("HAS_FEEDBACK_SK", { type: val, message });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:m-20">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert mb-4 max-w-sm"
        src="/kashmiri.png"
        alt="kashur Logo"
        width={100}
        height={37}
        priority
      />
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-8">
        <h1 className="text-white text-2xl font-bold  rounded-lg text-center">
          Kindly provide your feedback to support the inclusion of the Kashmiri
          language in Google Translation Services, Its Free, Just your valuable
          3 Minutes!
        </h1>
      </div>

      <h4 className="m-4 text-red-500 text-xl">
        
        
        <span className="text-gray-900 text-xl">Latest Update: </span> Microsoft has added a Kashmiri translator; now it's Google's turn. Keep
        Supporting. <a className="text-blue-500 underline text-xl" href="https://www.bing.com/translator?to=ks&setlang=be" target="_blank">Check it out!</a>
      </h4>
      <h2 className="text-4xl text-blue-900 m-4 font-bold text-center">
        Your <span className="text-green-800">Feedback</span> Counts!
      </h2>

      <div className="relative max-w-md  mt-4 w-600 p-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <button
          className="absolute right-2 top-0 text-right text-blue-700 underline"
          onClick={(e) => {
            window.scrollTo(0, helpRef?.current?.offsetTop || 3080);
            amplitude.track("HelpLink_SK");
          }}
        >
          Help! / Watch Video (ویڈیو دیکھی)
        </button>
        <h5 className=" text-2xl font-semibold tracking-tight text-gray-700 dark:text-white mt-4">
          Steps to submit feedback to google
        </h5>
        <p className="mb-4 text-gray-500">
          گوگل کو فیڈ بیک جمع کرنے کے اقدامات
        </p>

        <ol className="relative text-gray-500 border-s border-gray-400 dark:border-gray-700 dark:text-gray-500">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-grey-900">
              1
            </span>
            <h3 className="font-medium leading-tight">
              Click Copy button to Copy the feedback text / Content
            </h3>
            <p className="mb-2 text-gray-500">
              فیڈ بیک ٹیکسٹ / مواد کو کاپی کرنے کے لیے بٹن پر کلک کریں۔
            </p>
            <div className="flex mb-4 flex-w">
              <CopyToClipboard
                text={content}
                onCopy={handleCopyClick}
                className="animate-glow flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <span>
                  {!copied ? (
                    <BsClipboard className="w-3 h-5 mr-2" />
                  ) : (
                    <BsClipboard2CheckFill className="w-3 h-5 mr-2" />
                  )}
                  {copied ? "Copied!" : "Copy / کاپی"}
                </span>
              </CopyToClipboard>
              <button
                type="button"
                onClick={handleOpenModal}
                className="py-2 px-2  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                View / مواد کو دیکھیں
              </button>
            </div>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              2
            </span>
            <h3 className="font-medium leading-tight">Click this link</h3>
            <p className="text-gray-500">اس لنک پر کلک کریں۔</p>
            <p className="text-sm">
              <a
                className="text-blue-800 font-medium underline font-semibold"
                onClick={() => {
                  amplitude.track("GoogleLinkOpened");
                }}
                href="https://translate.google.com/"
              >
                https://translate.google.com
              </a>
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              3
            </span>
            <h3 className="font-medium leading-tight">
              Click <b>Send Feedback</b> text
            </h3>
            <p className="text-gray-500">
              بٹن پر کلک کریں۔ <b>Send Feedback</b>
            </p>
            <Image
              className=" max-w-full md:max-w-500 sm:max-w-full lg:max-w-500 -mx-2  mt-4 border-2 border-blue-500"
              src="/one-1.png"
              alt="kashur Logo"
              width={400}
              height={500}
              priority
            />
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              4
            </span>
            <h3 className="font-medium leading-tight">
              Paste the copied content{" "}
            </h3>
            <p className="text-gray-500">کاپی شدہ مواد کو پیسٹ کریں۔</p>
            <Image
              className=" max-w-full md:max-w-500 sm:max-w-full lg:max-w-500 -mx-2  mt-4 border-2 border-blue-500"
              src="/two-3.png"
              alt="kashur Logo"
              width={400}
              height={500}
              priority
            />
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              5
            </span>
            <h3 className="font-medium leading-tight">Click send</h3>
            <p className="text-gray-500">پر کلک کریں۔ Send</p>
            <Image
              className=" max-w-full md:max-w-500 sm:max-w-full lg:max-w-500 -mx-2  mt-4 border-2 border-blue-500"
              src="/three-3.png"
              alt="kashur Logo"
              width={400}
              height={500}
              priority
            />
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
              6
            </span>
            <h3 className="font-medium leading-tight">Confirmation</h3>
            <p className="text-sm text-black-400">
              Congratulations you have submitted your feedback!
            </p>
            <p className="text-gray-500">
              مبارک ہو آپ نے اپنی رائے جمع کرائی ہے!
            </p>
            <Image
              className=" max-w-full md:max-w-500 sm:max-w-full lg:max-w-500 -mx-2  mt-4 border-2 border-blue-500"
              src="/four-3.png"
              alt="kashur Logo"
              width={400}
              height={500}
              priority
            />
          </li>
        </ol>
      </div>
      <div
        id="help-section"
        ref={helpRef}
        className="max-w-md  mt-10  w-600 p-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 className=" text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">
          Facing issues
        </h5>
        <p className="text-gray-500">
          رائے جمع کرواتے وقت مسائل کا سامنا کرنا پڑتا ہے۔
        </p>
        <h2 className="mt-4 text-md font-semibold text-gray-900 dark:text-white">
          Watch Video to see how to submit feedback to google
        </h2>
        <p className="text-gray-500 mb-2">
          گوگل کو تاثرات جمع کرنے کا طریقہ دیکھنے کے لیے ویڈیو دیکھیں
        </p>
        <button
          onClick={handleToggleVideo}
          style={{ maxWidth: 300, margin: "auto" }}
          className="bg-blue-700  text-white font-bold py-2 px-2 rounded hover:bg-blue-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 flex items-center"
        >
          <BsFillCameraVideoFill className="w-5 h-5 mr-2" />{" "}
          {showVideo ? "Hide Video" : "Watch Video"}
        </button>
        {showVideo && (
          <video
            controls
            // width="400"
            // height="360"
            className=" sm:max-w-full mt-2  border-2 border-blue-500"
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className="mt-4 text-md font-semibold text-gray-900 dark:text-white">
          While copying
        </h2>
        <p className="text-gray-500">کاپی کرتے وقت</p>
        <ol className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm">
          <li>
            <a
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
              href="/format-1.pdf"
              onClick={() => {
                amplitude.track("PdfDownloaded_SK");
              }}
              download
            >
              <BsFileEarmarkPdf className="w-5 h-5 mr-2" />
              Download PDF file / ڈاؤن لوڈ کریں
            </a>
          </li>
          <li>
            <a
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
              href="/format-1.docx"
              onClick={() => {
                amplitude.track("WordDownloaded_SK");
              }}
              download
            >
              <BsFileEarmarkWordFill className="w-5 h-5 mr-2" />
              Download Word file
            </a>
          </li>
          <li>And copy the content from there and Proceed from Step Two (2)</li>
        </ol>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className="text-md font-semibold text-gray-900 dark:text-white">
          Clicking Send Feedback is not opening the feedback form
        </h2>
        <p className="mb-2 text-gray-500">
          پر کلک کرنے سے فیڈ بیک فارم نہیں کھل رہا ہے۔ Send Feedback
        </p>
        <ol className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm">
          <li>
            Wait for 3 to 4 seconds after clicking the send feedback button
          </li>
          <li>
            If nothing happens refresh the page and click send feedback again
          </li>
        </ol>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className=" text-md font-semibold text-gray-900 dark:text-white">
          Unable to paste the Copied content inside Textbox
        </h2>
        <p className="text-gray-500 mb-2">
          کاپی شدہ مواد کو ٹیکسٹ باکس کے اندر پیسٹ کرنے سے قاصر ہے۔
        </p>
        <ol className="ps-5 mt-2 space-y-1 list-disc list-inside text-sm">
          <li>Tap on the Text Box</li>
          <li>Access the Paste Option</li>
          <li>Paste the Copied Content</li>
          <li>
            Or Watch a Video{" "}
            <a
              target="_blank"
              className="text-blue-700 underline"
              onClick={() => amplitude.track("YoutubeLink_SK")}
              href="https://www.youtube.com/watch?v=VFHAVejCV3g"
            >
              Youtube
            </a>
          </li>
        </ol>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <h2 className="text-md font-semibold text-gray-900 dark:text-white">
          Still Facing issues email us at
        </h2>
        <p className="text-gray-500 mb-2">
          پھر بھی مسائل کا سامنا ہے ہمیں ای میل کریں۔
        </p>
        <a href="mail://rjmk1359@gmail.com">rjmk1359@gmail.com</a> /{" "}
        <a href="mail://rjmk1359@gmail.com">amkjammukashmir@gmail.com</a>
      </div>
      <div className="max-w-md  mt-10  w-600 p-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <ThumbsForm handleSubmitFeedback={handleSubmitFeedback} />
      </div>
      <footer className="border-t border-gray-300 p-4 text-center w-full mt-24">
        <p className="text-gray-600">
          Initiative Of <i>Center for youth development</i>. We are promoting
          the language without endorsing any religious or political views. This
          website is not for profit; it is solely intended to provide text
          feedback message and steps to submit feedback.
          <br />
          for further information. email:{" "}
          <a href="mail:cydsrinagar@gmail.com">cydsrinagar@gmail.com</a>, Ph :
          <a href="tel:+911944064302">0194-4064302</a>
        </p>
      </footer>
      {/* <!-- Main modal --> */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        amplitude={amplitude}
      />
    </main>
  );
}
