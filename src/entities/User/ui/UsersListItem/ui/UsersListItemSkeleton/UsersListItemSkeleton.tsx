import { Skeleton } from '@/shared/ui/Skeleton';
import cls from '../UsersListItem/UsersListItem.module.scss';
import { VStack } from '@/shared/ui/Stack';

export const UsersListItemSkeleton = () => {
   return (
      <VStack className={cls.cardSkeleton} gap="24">
         <Skeleton width={310} height={50} border="8px" />

         <VStack gap="16">
            <Skeleton width={240} height={30} border="8px" />
            <Skeleton width={240} height={30} border="8px" />
         </VStack>
      </VStack>
   );
};
