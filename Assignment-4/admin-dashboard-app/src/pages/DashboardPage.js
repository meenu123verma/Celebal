import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import DataTable from '../components/DataTable';
import Chart from '../components/Chart';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';

const sampleData = [
  { id: 1, name: 'Aryan Raj Singh', email: 'aryan.rathore@example.com' },
  { id: 2, name: 'Meenu Verma', email: 'meenu.verma@example.com' },
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1>Admin Dashboard</h1>
      <DataTable data={sampleData} />
      <Chart />
      <Calendar />
      <KanbanBoard />
    </DashboardLayout>
  );
};

export default DashboardPage;
