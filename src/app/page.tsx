import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Link href="/login">
          <h1 className="font-bold text-4xl">Dashboard Page</h1>
        </Link>
      </div>
    </>
  );
}
