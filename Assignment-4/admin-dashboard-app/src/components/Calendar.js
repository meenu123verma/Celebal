import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    start: new Date(2024, 5, 1, 10, 0),
    end: new Date(2024, 5, 1, 12, 0),
  },
  {
    title: 'Event',
    start: new Date(2024, 5, 2, 14, 0),
    end: new Date(2024, 5, 2, 16, 0),
  },
];

const CalendarComponent = () => {
  return <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />;
};

export default CalendarComponent;
