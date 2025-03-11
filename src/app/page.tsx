import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS + TypeScript</title>
        <meta
          name="description"
          content="A fully optimized Next.js starter template"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 dark:bg-dark">
        <h1 className="text-4xl font-bold text-primary">
          🚀 Next.js Tailwind Starter
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Fully optimized Next.js + Tailwind CSS + TypeScript template
        </p>
      </main>
    </>
  );
}
