import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactPage from "./Contact";
import { BorderBeam } from "./magicui/border-beam";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="gradient">Contact</Button>
      </DialogTrigger>
      <DialogContent>
        <BorderBeam />
        <ContactPage />
      </DialogContent>
    </Dialog>
  );
}
