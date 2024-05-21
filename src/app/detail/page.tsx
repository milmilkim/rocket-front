import Image from 'next/image';
import Sample from '@/assets/images/sample/img.jpeg';
import { Button } from '@/components/ui/button';
import Talk from '@/assets/images/talk.svg';

export default function Detail() {
  return (
    <>
      <div className="h-60">
        <Image src={Sample} alt="배경 이미지" className="object-cover h-full w-full" />
      </div>
      <main className="flex p-5">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-black font-semibold text-2xl">종로 급하다급해 피트니스</h1>
            <p className="text-gray-868 mt-1">서울특별시 종로구 청계천로 10 3층</p>
          </div>
          <Button variant={'outline'} size="xs">
            <Image src={Talk} alt="상담 아이콘" className="mr-1" />
            상담
          </Button>
        </div>
      </main>
    </>
  );
}
