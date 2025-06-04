
export const upcomingAppointments = [
  {
    id: 1,
    title: 'Dentist',
    time: '09:00 - 11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'Tooth',
    bgColor: '#4656D9',
    width:'160px',
    style: {height: '90px', paddingTop: '20px', backgroundColor: 'rgb(42, 26, 209)', color: '#e0e0e0'  }  
  },
  {
    id: 2,
    title: 'Physiotherapy Appointment',
    time: '11:00 - 12:00',
    doctor: 'Dr. Kevin Djones',
    icon: 'Arm',
    bgColor: '#D8D6FF',
    style: { width: '350px',paddingTop: '20px', marginLeft: '0px',height: '90px', backgroundColor:  'rgb(220, 218, 253)'  },
  }
];

export const scheduleAppointments = [
  {
    day: 'Thursday',
    appointments: [
      {
        id: 3,
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'Injection',
        bgColor: '#E0E7FF',
        style: {backgroundColor: 'rgb(220, 218, 253)' }
      },
      {
        id: 4,
        title: 'Ophthalmologist',
        time: '14:00 PM',
        icon: 'Eye',
        bgColor: '#E0E7FF',
       style:{width: '290px', gap:'15px',backgroundColor:  'rgb(220, 218, 253)' }
      }
    ]
  },
  {
    day: 'Saturday',
    appointments: [
      {
        id: 5,
        title: 'Cardiologist',
        time: '12:00 AM',
        icon: 'Heart',
        bgColor: '#E0E7FF',
        style: {width:'190px',backgroundColor: 'rgb(220, 218, 253)' }
      },
      {
        id: 6,
        title: 'Neurologist',
        time: '16:00 PM',
        icon: 'Brain',
        bgColor: '#E0E7FF',
        style: {width:'190px',backgroundColor:  'rgb(220, 218, 253)' }
      }
    ]
  }
];

