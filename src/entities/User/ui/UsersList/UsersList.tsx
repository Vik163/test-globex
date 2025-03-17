import { memo } from 'react';

import cls from './UsersList.module.scss';
import { HStack } from '@/shared/ui/Stack';
import type { User } from '../../model/types/user';
import { UsersListItemSkeleton } from '../UsersListItem/ui/UsersListItemSkeleton/UsersListItemSkeleton';
import { UsersListItem } from '../UsersListItem/ui/UsersListItem/UsersListItem';

interface UsersListProps {
   className?: string;
   users?: User[];
   isLoading?: boolean;
}

const getSkeletons = () =>
   new Array(9)
      .fill(0)
      .map((item, index) => <UsersListItemSkeleton key={index} />);

// карточки или скелетоны
export const UsersList = memo((props: UsersListProps) => {
   const { users, isLoading } = props;

   return (
      <HStack className={cls.UsersList} wrap="wrap" gap="24">
         {isLoading && getSkeletons()}

         {users &&
            users.map((item) => (
               <UsersListItem
                  user={item}
                  key={item.name}
                  className={cls.card}
               />
            ))}
      </HStack>
   );
});
