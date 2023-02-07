import * as dateFns from 'date-fns';

const DEFAULT_FORMAT = 'MM/dd/yyyy';

export const isValid = (date: string | Date | number) => {
  return dateFns.isValid(date);
};

export const formatDate = (
  date: string | Date | number,
  format: string = DEFAULT_FORMAT
) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return dateFns.format(date, format);
};
