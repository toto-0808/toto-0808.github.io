import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex">wa Page</h1>
      </header>
      <div className="mt-8">
        自己紹介
      </div>
    </div>
  );
}
