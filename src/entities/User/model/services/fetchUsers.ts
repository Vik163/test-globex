import type { User } from '../types/user';
import { $api } from '@/shared/api/api';

export const fetchUsers = async (term?: string) => {
   try {
      const response = await $api.get<User[]>('/f', {
         params: { term },
      });

      if (!response.data) {
         return 'Карточки не найдены';
      }

      return response.data;
   } catch (e) {
      return 'Карточки не найдены';
   }
};
