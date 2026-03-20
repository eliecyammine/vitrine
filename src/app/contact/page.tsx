import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — always open to new opportunities.",
};

export default function ContactPage() {
  return <Contact />;
}
