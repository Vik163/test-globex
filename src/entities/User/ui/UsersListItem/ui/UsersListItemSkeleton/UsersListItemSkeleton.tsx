import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from '../UsersListItem/UsersListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';

interface UsersListItemSkeletonProps {
   className?: string;
}

export const UsersListItemSkeleton = (props: UsersListItemSkeletonProps) => {
   const { className } = props;

   return (
      <Card
         className={classNames(cls.card, {}, [className, cls['cardSkeleton']])}
      >
         <Skeleton width={300} height={265} border="8px" />

         <VStack className={cls.infoSceleton} justify="between">
            <VStack gap="16">
               <Skeleton width={240} height={40} />
               <Skeleton width={240} height={60} />
            </VStack>
            <HStack justify="between" max>
               <Skeleton width="40%" height={20} className={cls.date} />
               <Skeleton width="30%" height={20} className={cls.date} />
            </HStack>
         </VStack>
      </Card>
   );
};
