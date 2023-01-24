import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

const url = "https://online.us11.list-manage.com/subscribe/post";
const user = "6aef0c3206dcaeb8533c1e1e2";
const id = "48faff790a";

export default function MailchimpForm() {
  const postUrl = `${url}?u=${user}&id=${id}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  );
}
