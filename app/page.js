import Image from "next/image";
import Animation from "../components/Animation";

export default function Home() {
  return (
    <main className='flex border bg-white min-h-screen flex-col items-center justify-center p-24'>
      <Animation />
    </main>
  );
}
