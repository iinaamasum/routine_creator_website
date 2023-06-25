import emailjs from '@emailjs/browser';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Textarea,
  Typography,
} from '@material-tailwind/react';

import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { FaTelegramPlane } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `service_4fgbb3o`,
        `template_3fujl3k`,
        form.current,
        `RdNJ7bULZ4boqoBYL`
      )
      .then(
        (result) => {
          toast.success('Message Sent Successfully. Please Wait for Response.');
        },
        (error) => {
          toast.error(`error: ${error}`);
        }
      );
    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center w-full py-5 min-h-screen bg-gray-50">
      <Card className="w-96 md:w-[500px] my-5">
        <form ref={form} onSubmit={sendEmail} className="text-black">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h2" color="blue" className="text-center">
              Contact
            </Typography>
            <Input name="user_name" label="Name" size="lg" />
            <Input name="user_email" label="Email" size="lg" />
            <Textarea name="message" label="Message" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              <span className="flex items-center justify-center gap-x-2">
                Send Message
                <FaTelegramPlane size={18} />
              </span>
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
