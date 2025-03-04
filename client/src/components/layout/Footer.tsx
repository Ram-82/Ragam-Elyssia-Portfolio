import { Link } from "wouter";
import { Separator } from "@/components/ui/separator";
import { Instagram, Linkedin } from "lucide-react";
import { SiBehance } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif text-primary mb-4">Ragam Elyssia</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered luxury branding studio specializing in high-end logo design and brand identity.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/"><a className="block text-sm text-muted-foreground hover:text-primary">Home</a></Link>
              <Link href="/about"><a className="block text-sm text-muted-foreground hover:text-primary">About</a></Link>
              <Link href="/services"><a className="block text-sm text-muted-foreground hover:text-primary">Services</a></Link>
              <Link href="/portfolio"><a className="block text-sm text-muted-foreground hover:text-primary">Portfolio</a></Link>
              <Link href="/contact"><a className="block text-sm text-muted-foreground hover:text-primary">Contact</a></Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>General: contact@ragamelyssia.com</p>
              <p>Business: business@ragamelyssia.com</p>
              <p>Support: support@ragamelyssia.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <SiBehance className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ragam Elyssia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;