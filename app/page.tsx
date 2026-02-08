"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Section from "@/features/home/components/section";
import cardData from "@/features/home/types/cards-data";
import Cards from "@/features/home/components/cards";
import Header from "@/features/home/components/header";
import Footer from "@/features/footer/components/footer";

export default function Home() {

  const router = useRouter();

  return (
    <div className="bg-background">

      <Header title="CRM">

        <a href="#about"
        className="hidden text-sm font-medium text-muted-foreground 
        hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-3 py-2 sm:inline-flex">
          About
        </a>
        
        <Link href="/auth"
        className={buttonVariants({ variant: "ghost", size: "sm" })}>
          Log in
        </Link>
        
        <Link href="/auth/signup"
        className={buttonVariants({ size: "sm" })}>
          Sign up
        </Link>

      </Header>

      <Section header="Manage deals, contacts, and notes in one place" 
      description="A simple CRM to keep your pipeline clear, your contacts organized,and your follow-ups on track. Get started in seconds">

        <Button
        size="lg"
        onClick={() => router.push('/auth/signup')}
        className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Get started
        </Button>

        <Button
        size="lg"
        variant="outline"
        className="border-border bg-transparent"
        onClick={() => router.push('/auth')}>
          Sign in
        </Button>

      </Section>

      <Section header="Everything you need to close more deals" 
      description="Deals, contacts, and notes in a clean, fast interface. No clutter—just what matters." >

        <div className="flex flex-col items-center gap-6">

          <Cards items={cardData} />

          <div className="mt-12 text-center">
            <Button
            size="lg"
            onClick={() => router.push('/auth/signup')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Create Account
            </Button>
          </div>

        </div>

      </Section>

      <Footer />
    </div>
  );
}
