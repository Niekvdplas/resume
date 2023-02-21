import { ReactElement } from "react";
import "./globals.css";

const paths: path[] = [
  { href: "#header", text: "Home" },
  { href: "#work", text: "My Work" },
  { href: "#resume", text: "Resume" },
  { href: "#contact", text: "Contact" },
];

const links: link[] = [
  {
    href: "https://www.linkedin.com/in/niek-van-der-plas-0b896714a/",
    icon: (
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    ),
  },
  {
    href: "https://github.com/Niekvdplas",
    icon: (
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    ),
  },
];

type link = {
  href: string;
  icon: ReactElement;
};

type path = {
  href: string;
  text: string;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex min-h-screen w-screen justify-center bg-gradient-to-br from-black via-black to-green-800 p-0 sm:p-8">
          <div className="flex min-h-full w-full max-w-screen-xl grow flex-col items-start overflow-hidden border border-stone-900 bg-stone-900 shadow-strong sm:rounded-3xl">
            <div
              id="header"
              className="w-full flex items-center text-white p-8 justify-between  m-2"
            >
              <div className="inline p-2">
                <span className="mr-2 text-2xl">Niek</span>
                <span className="text-2xl font-bold">van der Plas</span>
              </div>
              <nav className="flex justify-between gap-4">
                {paths.map((value: path, index) => (
                  <a
                    key={index}
                    href={value.href}
                    className="text-stone-400 hover:text-white p-2 hover:border-green-400 hover:border-2 rounded-2xl focus:bg-green-400/50 focus:text-white"
                  >
                    {value.text}
                  </a>
                ))}
              </nav>
            </div>
            <div className="w-full grow pb-6">{children}</div>
            <footer
              id="footer"
              className="flex w-full flex-col items-center justify-between gap-y-4 border-t-2 border-stone-500 bg-stone-800 py-6 px-4 sm:flex-row sm:py-4 md:px-8"
            >
              <p className="w-max whitespace-nowrap text-sm font-semibold text-stone-300/50">
                © {new Date().getFullYear()} Niek van der Plas
              </p>
              <div className="flex gap-x-4">
                {links.map((value: link, index: number) => (
                  <a key={index} href={value.href}>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 bg-stone-300 p-1 rounded-sm"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {value.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
