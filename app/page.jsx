import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-25 text-center">
            We are the most straightforward URL Shortner in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener.
          </p>
          <div className="flex gap-3 justify-start">
            <a href="/shorten" >
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
              Try Now
            </button></a>
            <a href="/github" >
            <button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white">
              Github
            </button></a>
          </div>
        </div>
        <div className="flex justify-star">
          <img
            src="vector.jpg"
            fill="true"
            alt="an Image of a vector"
            className="mix-blend-darken"
          />
        </div>
      </section>
    </main>
  );
}
