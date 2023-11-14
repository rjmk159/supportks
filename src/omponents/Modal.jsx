import React, { useEffect } from "react";
import { BsXLg } from "react-icons/bs";

const Modal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return;
  });
  useEffect(() => {
    // Add a class to the body when the component mounts
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Remove the class from the body when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return (
    <>
      {isOpen && (
        // <!-- Main modal -->
        <div className="main-cont overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Feedback Content
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-transparent  rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <BsXLg className="h-20 w-20" />
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="overflow-y-auto p-6 flex-auto max-h-[60vh]">
                <p>
                  <b>
                    Request to Add Kashmiri Language its approved script
                    (Nastaliq) to Google Translation Services
                  </b>
                </p>
                <p>Dear Google Translation Team,</p>
                <p>
                  We are writing to request the inclusion of the Kashmiri
                  language in institutionally approved Nastaliq script into
                  Google's translation services, along with vocal support.
                  Kashmiri, with more than 7.1 million speakers globally.
                </p>
                <p>
                  As per records available on different google platforms,
                  Kashmiri is 5000 years old language and has strong literary
                  traditions of about 8 Centuries. A few languages in the
                  contemporary times enjoy the history of being so old. It is
                  elder to many languages of the Indo Iranian and Indo Aryan
                  origin. This language has a strong vocabulary system and can
                  cater the demands of technological era. Besides Jammu and
                  Kashmir, it is spoken in many parts of subcontinent and
                  different parts of the world by Kashmiri diaspora. with rich
                  literary traditions and strong cultural bonds this language
                  has played a vital role in promoting human values ,peace
                  ,interfaith harmony and high standards of literature writing .
                </p>
                <p>
                  Kashmiri, is deeply rooted in the rich cultural tapestry of
                  the region. The absence of Kashmiri in Google's translation
                  services, including vocal support, poses a significant
                  linguistic and cultural barrier.{" "}
                </p>
                <p>
                  Kashmir is not only a region with a rich linguistic and
                  cultural heritage but is also an officially recognized tourist
                  destination. The inclusion of Kashmiri in Google Translate
                  will enhance the tourist experience, foster better
                  communication, and promote economic growth in the region.
                  Tourists visiting Kashmir will have a more immersive
                  experience, locals will be better able to cater to their
                  needs, and this, in turn, will stimulate economic conditions
                  in the area.
                </p>
                <p>
                  We are eager to collaborate with Google in this endeavor and
                  are prepared to provide any necessary linguistic resources,
                  documentation, and expert support to expedite the process of
                  adding Kashmiri in Nastaliq script to Google Translate. Our
                  community is dedicated and enthusiastic about contributing to
                  this effort.
                </p>
                <p>
                  Furthermore, Kashmiri plays a vital role as a currency
                  language in Jammu and Kashmir. Its inclusion in Google
                  Translate, supported by vocal capabilities, will facilitate
                  trade, commerce, and everyday transactions, contributing to
                  the economic empowerment of millions of individuals who rely
                  on this language for their livelihoods.
                </p>
                <p>
                  We're excited to help Google add Kashmiri to Translate,
                  offering linguistic resources, expert support, and a
                  prescribed grammar. Our dedicated community, with thousands of
                  books, dictionaries, and a running newspaper, is enthusiastic
                  about contributing to this effort
                </p>
                <p>
                  In our pursuit of this goal, we aim to garner support from the
                  broader linguistic and language professional community. Here
                  are a few email addresses of NGO’s or individuals who will be
                  able to provide invaluable assistance in this endeavor
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
                  We kindly request Google to initiate a dialogue with our
                  community and these experts to discuss the process of adding
                  Kashmiri in Nastaliq script to Google Translate, complete with
                  vocal support. Together, we can make this vision a reality,
                  enhancing accessibility for all.
                </p>
                <p>Thank you for your attention and consideration.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
