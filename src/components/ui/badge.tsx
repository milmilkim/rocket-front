import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import Icon from '@/assets/images/close.svg';

const badgeVariants = cva(
  'inline-flex h-8 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mr-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  handleClickCancel?: () => void;
}

function Badge({ className, variant, children, ...props }: React.PropsWithChildren<BadgeProps>) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
      <span
        onClick={props.handleClickCancel}
        className="w-[10px] h-[10px] ml-2 cursor-pointer"
        style={{
          backgroundImage: `url(${Icon.src})`,
        }}
      ></span>
    </div>
  );
}

export { Badge, badgeVariants };
