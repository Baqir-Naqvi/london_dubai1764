"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Animation from "../components/Animation";
import ChooseCity from "@/components/ChooseCity";

export default function Home() {
  const chooseCityRef = useRef(null);

  return (
    <main className='flex border bg-black min-h-screen flex-col items-start justify-start '>
      <Animation chooseCityRef={chooseCityRef} />
      <ChooseCity chooseCityRef={chooseCityRef} />
    </main>
  );
}
