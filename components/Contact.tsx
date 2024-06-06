"use client";

import { toast } from "sonner";
import { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (submitting) return;

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, phone, message }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        toast("Form submitted successfully");
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        toast("Form submission failed");
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 space-y-8">
      <BorderBeam />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Interested in my work?</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below and i&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              id="first-name"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              id="last-name"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            placeholder="Enter your phone number"
            type="tel"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            placeholder="Enter your message"
            required
          />
        </div>
        <Button type="submit" variant={"gradient"} disabled={submitting}>
          {submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "Send message"
          )}
        </Button>
      </form>
    </div>
  );
}
