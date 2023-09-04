import emailjs from "@emailjs/browser";

interface Props {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = ({ name, email, message }: Props) => {
  const templatePrams = {
    name: name,
    email: email,
    message: message,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      templatePrams,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then(
      (resp) => {
        alert("Email sent successfully, we will contact you shortly!");
        console.log(resp.status, resp.text);
      },
      (err) => {
        alert("An error occurred please try again later");
      }
    );
};
