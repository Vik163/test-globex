import { FormEvent, useState } from 'react';
import cls from './ModalInfo.module.scss';
import { Button } from '@/shared/ui/Button';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { User } from '@/entities/User/model/types/user';
import { VStack } from '@/shared/ui/Stack';

interface ModalInfoProps {
   user: User;
}

export const ModalInfo = (props: ModalInfoProps) => {
   const { user } = props;
   const isLoadingModal = false;

   return (
      <VStack className={cls.container} gap="40">
         <Text
            title={HeaderTagType.H_3}
            className={cls.title}
            fontSize={FontSize.SIZE_24}
            fontWeight={FontWeight.TEXT_700}
         >
            {user.name}
         </Text>
         <VStack className={cls.infoContainer}>
            <Text
               className={cls.infoBlock}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Телефон:
               <span className={cls.info}>{user.phone}</span>
            </Text>
            <Text
               className={cls.infoBlock}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Почта:
               <span className={cls.info}>{user.email}</span>
            </Text>
            <Text
               className={cls.infoBlock}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Дата приёма:
               <span className={cls.info}>{user.hire_date}</span>
            </Text>
            <Text
               className={cls.infoBlock}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Должность:
               <span className={cls.info}>{user.position_name}</span>
            </Text>
            <Text
               className={cls.infoBlock}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Подразделение:
               <span className={cls.info}>{user.department}</span>
            </Text>
         </VStack>
         <VStack className={cls.addInfoContainer}>
            <Text
               className={cls.addInfo}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_400}
            >
               Дополнительная информация:
            </Text>
            <Text
               className={cls.description}
               fontSize={FontSize.SIZE_16}
               fontWeight={FontWeight.TEXT_400}
            >
               Разработчики используют текст в качестве заполнителя макета
               страницы. Разработчики используют текст в качестве заполнителя
               макета страницы.
            </Text>
         </VStack>
      </VStack>
   );
};
