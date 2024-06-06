import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactPage from "./Contact";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="gradient">Contact</Button>
      </DialogTrigger>
      <DialogContent>
        <ContactPage />
      </DialogContent>
    </Dialog>
  );
}
