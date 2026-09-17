import { waLink } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hi Guru, I came from your website and I'm interested in your fitness program.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Guru on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ember text-ink shadow-lg transition-transform hover:scale-105"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20.5 3.5C18.3 1.3 15.4 0 12.3 0 5.9 0 0.7 5.2 0.7 11.6c0 2 .5 4 1.5 5.7L0.6 24l6.9-1.8c1.6.9 3.4 1.3 5.2 1.3h0c6.4 0 11.6-5.2 11.6-11.6 0-3.1-1.2-6-3.4-8.1l-.4-.3zM12.3 21.2c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-3.4.9.9-3.3-.2-.3c-1-1.5-1.5-3.2-1.5-5 0-5.1 4.2-9.3 9.3-9.3 2.5 0 4.8 1 6.5 2.7 1.7 1.7 2.7 4.1 2.7 6.5 0 5.2-4.2 9.3-9.4 9.3z"
          fill="currentColor"
        />
        <path
          d="M9.1 6.7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.2-.2-.5-.3-.2-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.8 1-.2.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.2.2-.4 0-.2 0-.3 0-.4-.1-.1-.6-1.5-.8-2z"
          fill="#151417"
        />
      </svg>
    </a>
  );
}
