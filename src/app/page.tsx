import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Close from '@/assets/images/close-large.svg';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

import Heart from '@/assets/images/heart.svg';
import HeartFill from '@/assets/images/hear-fill.svg';
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="color-primary">test</h1>
      <Button size="full">Click me</Button>
      <Button size="full" variant={'secondary'}>
        Click me
      </Button>

      <Input icon="search" placeholder="어떤 운동을 찾고 계신가요?" />

      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>

      <Badge>안녕</Badge>

      <Card className="h-44 flex justify-between my-2 shadow-lg">
        <CardHeader className="pr-4">
          <Skeleton className="w-32 h-full" />
        </CardHeader>
        <CardContent className="p-5 pl-0 flex flex-col w-full relative">
          <p className="text-gray-868 text-sm">헬스 / P.T / G.X</p>
          <p className="text-base font-semibold">종로 로켓짐</p>
          <p>서울 종로구 저동1가</p>
          <p className="text-primary">
            월 <span className="font-semibold">40,000원</span> ~ / 회 <span className="font-semibold">55,000원 ~</span>
          </p>
          <p className="bg-gray-f2f2f2 w-full text-xs p-2 rounded-xl mt-auto">
            <span className="font-semibold">무료서비스</span> 수건/Wi-Fi/반신욕기 이용
          </p>
          <div className="absolute right-4 top-4">
            {/* <Button variant={'ghost'} className="p-0" aria-label="좋아요">
              <Image src={Heart} alt="하트 아이콘" />
            </Button> */}
            <Button variant={'ghost'} className="p-0" aria-label="좋아요">
              <Image src={HeartFill} alt="하트 아이콘" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Drawer>
        <DrawerTrigger>테스트</DrawerTrigger>
        <DrawerContent className="sm:w-full md:w-[500px] min-h-64  mx-auto">
          <div className="w-full">
            <DrawerHeader className="flex w-full h-full justify-center items-center">
              <DrawerTitle className="text-center">내 위치 지정</DrawerTitle>
              <DrawerClose className="absolute right-0">
                <Button variant={'ghost'} aria-label="좋아요">
                  <Image src={Close} alt="닫기 아이콘" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <Separator />
            <DrawerFooter className="block">
              <Button>그냥 버튼</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger>알림 테스트</DrawerTrigger>
        <DrawerContent className="sm:w-full md:w-[500px] min-h-96 max-h-[800px] mx-auto">
          <div className="w-full">
            <DrawerHeader className="flex w-full h-full justify-center items-center">
              <DrawerTitle className="text-center">알림</DrawerTitle>
              <DrawerClose className="absolute right-0">
                <Button variant={'ghost'} aria-label="좋아요">
                  <Image src={Close} alt="닫기 아이콘" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <Separator />

            <Card className="min-auto flex justify-between my-2 border m-5">
              <CardContent className="p-6 min-h-28 h-full items-center flex">
                <p className="break-keep text-sm">
                  <span className="font-semibold ">[알림] [종로 스포츠짐]</span> 2024.03.30(토) 오후 7:00-8:00 PT수업 수강신청을 완료하였습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
