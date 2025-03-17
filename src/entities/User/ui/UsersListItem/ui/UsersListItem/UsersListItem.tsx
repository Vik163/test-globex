import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UsersListItem.module.scss';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import envelope from '@/shared/assets/icons/envelope.svg';
import phone from '@/shared/assets/icons/phone.svg';
import { Modal } from '@/shared/ui/Modal';
import { ModalInfo } from '../ModalInfo/ModalInfo';
import type { User } from '../../../../model/types/user';

export interface UsersListItemProps {
   className?: string;
   user: User;
}

export const UsersListItem = memo((props: UsersListItemProps) => {
   const { className, user } = props;

   const [openInfo, setOpenInfo] = useState(false);

   // модалка редактирования ==============
   function closeInfo() {
      setOpenInfo(false);
   }

   // async function updateSeminar(data: UpdateData) {
   //    const newSeminar: Seminar = {
   //       id: seminar.id,
   //       title: data.title || seminar.title,
   //       photo: data.photo || seminar.photo,
   //       description: data.description || seminar.description,
   //       date: data.date || seminar.date,
   //       time: data.time || seminar.time,
   //    };
   //    const res = await fetchUpdateSeminar(newSeminar));
   //    if (res.meta.requestStatus === 'fulfilled') {
   //       closeEditor();
   //    }
   // }
   // ------------------------------------------

   return (
      <Card
         className={classNames(cls.UsersListItem, {}, [className])}
         onClick={() => setOpenInfo(true)}
      >
         <VStack className={cls.info} justify="between">
            <Text
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_24}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               {user.name}
            </Text>
            <Text
               fontSize={FontSize.SIZE_14}
               fontWeight={FontWeight.TEXT_500}
               className={cls.phone}
            >
               <Icon className={cls.iconInfo} Svg={phone} />
               {user.phone}
            </Text>
            <Text fontWeight={FontWeight.TEXT_700} className={cls.email}>
               <Icon className={cls.iconInfo} Svg={envelope} />
               {user.email}
            </Text>
         </VStack>
         {openInfo && (
            <Modal
               isOpen={openInfo}
               onClose={closeInfo}
               lazy
               className={cls.closeIcon}
            >
               <ModalInfo user={user} />
            </Modal>
         )}
      </Card>
   );
});
