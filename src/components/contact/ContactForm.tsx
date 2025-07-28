
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from './EmailJSInit';

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple email validation
    if (!formData.user_email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Successfully sent:', result.text);
          
          toast({
            title: "Request sent",
            description: "Thank you! We will get back to you soon.",
            variant: "success"
          });
          
          setFormData({
            user_name: '',
            user_email: '',
            user_company: '',
            message: '',
          });
          
          setIsSubmitted(true);
          if (onSubmitSuccess) onSubmitSuccess();
          
          // Show success state temporarily
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
          
          setIsLoading(false);
        },
        (error) => {
          console.error('Error sending:', error.text);
          
          toast({
            title: "Error",
            description: "There was an error sending your request. Please try again later.",
            variant: "destructive"
          });
          
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      {isSubmitted ? (
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center border border-white/30 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-black">Thank you!</h3>
            <p className="text-black mb-4">Your request has been submitted successfully. We will contact you soon.</p>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/30">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 mr-3 text-blue-light" />
            <h3 className="text-xl font-semibold text-black">Contact Us</h3>
          </div>
          <input type="hidden" name="subject" value="SPTools" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                id="user_name"
                name="user_name"
                type="text"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-white/60 border border-white/40 rounded-lg text-black focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all placeholder-gray-500 text-sm"
                required
              />
            </div>
            <div>
              <input
                id="user_email"
                name="user_email"
                type="email"
                value={formData.user_email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-3 py-2 bg-white/60 border border-white/40 rounded-lg text-black focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all placeholder-gray-500 text-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              id="user_company"
              name="user_company"
              type="text"
              value={formData.user_company}
              onChange={handleChange}
              placeholder="Your Company"
              className="w-full px-3 py-2 bg-white/60 border border-white/40 rounded-lg text-black focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all placeholder-gray-500 text-sm"
            />
          </div>
          <div className="w-full mb-4">
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full px-3 py-2 min-h-[80px] bg-white/60 border border-white/40 rounded-lg text-black focus:ring-2 focus:ring-blue-light focus:border-transparent transition-all placeholder-gray-500 text-sm resize-none"
            />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full py-2 hover-lift text-sm"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Request'}
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
