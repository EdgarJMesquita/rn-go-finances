import {
  format,
  isThisMonth,
  isThisWeek,
  isToday,
  isYesterday,
  parseISO,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatToFriendlyDate(strDate: string): string {
  try {
    const date = parseISO(strDate);
    const today = `'Hoje às' HH:mm`;
    const thisWeek = `E 'às' HH:mm`;
    const thisMonth = `'dia' dd 'às' HH:mm`;
    const completeDate = `dd/MM/yyyy 'às' HH:mm`;
    const yesterday = `'Ontem às' HH:mm`;
    const formatSchema = isToday(date)
      ? today
      : isYesterday(date)
      ? yesterday
      : isThisWeek(date)
      ? thisWeek
      : isThisMonth(date)
      ? thisMonth
      : completeDate;

    return format(date, formatSchema, { locale: ptBR });
  } catch (error) {
    return 'Data corrompida';
  }
}
