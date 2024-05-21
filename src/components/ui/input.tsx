import * as React from 'react';

import { cn } from '@/lib/utils';
import Search from '@/assets/images/search.svg';
import Image from 'next/image';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: 'search';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, icon, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={cn(
          'flex h-11 w-full text-gray-868 rounded-lg border border-input bg-background px-3 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          icon === 'search'
        )}
        ref={ref}
        {...props}
      />
      {icon === 'search' && <Image src={Search} alt="검색 아이콘" className="absolute right-3 top-1/2 transform -translate-y-1/2 ml-1" />}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
