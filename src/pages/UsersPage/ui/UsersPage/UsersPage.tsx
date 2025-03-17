import { useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './UsersPage.module.scss';
import { fetchUsers, User, UsersList } from '@/entities/User';
import { Input } from '@/shared/ui/Input';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import lens from '@/shared/assets/icons/lens.svg';

interface UsersPageProps {
   className?: string;
   setError: React.Dispatch<React.SetStateAction<string>>;
}

export const UsersPage = (props: UsersPageProps) => {
   const { className, setError } = props;
   const [users, setUsers] = useState<User[] | undefined>();
   const [inputText, setInputText] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const inputRef = useRef<HTMLInputElement>(null);

   // первоначальный запрос
   useEffect(() => {
      if (!users) sendRequest();
   }, [users]);

   function handleData(data: User[] | string) {
      if (typeof data === 'string') {
         setError(data);
      } else {
         setUsers(data);
      }
   }

   function sendRequest(data?: string) {
      setIsLoading(true);

      fetchUsers(inputText || data)
         .then((data) => handleData(data))
         .finally(() => setIsLoading(false));
   }

   // клавиша "Enter" подтверждение поиска ================
   function onEnterKeyRequest(e: KeyboardEvent) {
      const value = inputRef?.current?.value;
      if (e.code === 'Enter' && value) {
         sendRequest(value);
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', (e) => onEnterKeyRequest(e));

      return () => {
         document.removeEventListener('keydown', (e) => onEnterKeyRequest(e));
      };
   }, []);
   // -------------------------------------------

   return (
      <Page className={classNames(cls.UsersPage, {}, [className])}>
         <HStack className={cls.inputWrapper} justify="between">
            <Input
               refProps={inputRef}
               onChange={(value) => setInputText(value)}
               className={cls.input}
            />
            <Icon clickable onClick={sendRequest} Svg={lens} />
         </HStack>

         <UsersList isLoading={isLoading} users={users} />
      </Page>
   );
};
