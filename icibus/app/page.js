import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>Teste</h2>
      <Button>Teste ...</Button>


      <UserButton afterSignOutUrl="/"></UserButton>

    </div>
  );
}
