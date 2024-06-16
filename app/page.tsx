/* eslint-disable react/no-unescaped-entities */
import { Footer } from "@/components/component/footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="p-3 mx-auto md:ml-44">
    <h1 className="text-5xl   font-bold">Sahil.</h1>
    <p className="mt-2"><Link className="hover:text-amber-600" href={'https://github.com/sahil-idk'}>Github</Link> | <Link className="hover:text-amber-600" href={'https://www.linkedin.com/in/sahil-70061822b/'}>LinkedIn </Link> | <Link className="hover:text-amber-600" href={'https://twitter.com/sahildkun'}>Twitter</Link></p>
    <p className="text-sm mt-10 md:w-96 text-slate-300 font-light">Fullstack developer passionate about creating innovative solutions and pushing the boundaries of technology. Let's build something amazing together!</p>
    </main>

    </>
  );
}
