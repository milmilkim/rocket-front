'use client';

import Logo from '@/assets/images/rocket.svg';
import Card from '@/assets/images/cart.svg';
import Noti from '@/assets/images/noti.svg';
import User from '@/assets/images/user.svg';
import Logout from '@/assets/images/logout.svg';

import Image from 'next/image';
import { Button } from '../ui/button';

const Gnb = () => {
  return (
    <div className="p-6 border-b flex justify-between">
      <div>
        <a href="#">
          <Image src={Logo} alt="rocket" aria-label="메인 페이지" />
        </a>
      </div>
      <div className="flex">
        <Button variant={'icon'} aria-label="장바구니">
          <Image src={Card} alt="장바구니 아이콘" />
        </Button>
        <Button variant={'icon'} aria-label="알림">
          <Image src={Noti} alt="알림 아이콘" />
        </Button>
        <Button variant={'icon'} aria-label="내 정보">
          <Image src={User} alt="내 정보 아이콘" />
        </Button>
        <Button variant={'icon'} aria-label="로그아웃">
          <Image src={Logout} alt="로그아웃 아이콘" />
        </Button>
      </div>
    </div>
  );
};

export default Gnb;
