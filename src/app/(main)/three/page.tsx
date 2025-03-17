import Link from 'next/link';

const ThreeJsPage = () => {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex">wa Page</h1>
      </header>
      <div className="mt-8">
        <Link href='/three/tutorial'>Boxチュートリアル</Link>
        <p>コンテンツ</p>
        <p>コンテンツ</p>
        <p>コンテンツ</p>
        <p>コンテンツ</p>
      </div>
    </div>
  )
}

export default ThreeJsPage