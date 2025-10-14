export const mockClients = [
  {
    id: 1,
    name: 'Emily Johnson',
    phone: '(555) 123-4567',
    email: 'emily.j@email.com',
    lastVisit: '2025-10-10',
    nextVisit: '2025-10-18',
    totalSessions: 12,
    skinType: 'Combination',
    allergies: 'None',
    dob: '1990-05-15'
  },
  {
    id: 2,
    name: 'Sarah Williams',
    phone: '(555) 234-5678',
    email: 'sarah.w@email.com',
    lastVisit: '2025-10-08',
    nextVisit: '2025-10-20',
    totalSessions: 8,
    skinType: 'Dry',
    allergies: 'Fragrance',
    dob: '1988-08-22'
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    phone: '(555) 345-6789',
    email: 'jessica.m@email.com',
    lastVisit: '2025-10-05',
    nextVisit: '2025-10-22',
    totalSessions: 15,
    skinType: 'Oily',
    allergies: 'None',
    dob: '1992-11-30'
  },
  {
    id: 4,
    name: 'Amanda Brown',
    phone: '(555) 456-7890',
    email: 'amanda.b@email.com',
    lastVisit: '2025-10-12',
    nextVisit: '2025-10-25',
    totalSessions: 6,
    skinType: 'Sensitive',
    allergies: 'Latex',
    dob: '1995-03-10'
  }
];

export const mockAppointments = [
  {
    id: 1,
    clientId: 1,
    clientName: 'Emily Johnson',
    date: '2025-10-18',
    time: '10:00 AM',
    treatmentType: 'Facial Treatment',
    aesthetician: 'Dr. Lisa Park',
    status: 'upcoming',
    duration: '60 min'
  },
  {
    id: 2,
    clientId: 2,
    clientName: 'Sarah Williams',
    date: '2025-10-20',
    time: '2:00 PM',
    treatmentType: 'Laser Hair Removal',
    aesthetician: 'Dr. Maria Chen',
    status: 'upcoming',
    duration: '45 min'
  },
  {
    id: 3,
    clientId: 3,
    clientName: 'Jessica Martinez',
    date: '2025-10-22',
    time: '11:30 AM',
    treatmentType: 'Chemical Peel',
    aesthetician: 'Dr. Lisa Park',
    status: 'upcoming',
    duration: '90 min'
  },
  {
    id: 4,
    clientId: 1,
    clientName: 'Emily Johnson',
    date: '2025-10-10',
    time: '3:00 PM',
    treatmentType: 'Microdermabrasion',
    aesthetician: 'Dr. Maria Chen',
    status: 'completed',
    duration: '60 min'
  },
  {
    id: 5,
    clientId: 4,
    clientName: 'Amanda Brown',
    date: '2025-10-25',
    time: '1:00 PM',
    treatmentType: 'Botox',
    aesthetician: 'Dr. Lisa Park',
    status: 'upcoming',
    duration: '30 min'
  }
];

export const mockTreatments = [
  {
    id: 1,
    clientId: 1,
    treatmentType: 'Facial Treatment',
    sessionNo: 8,
    totalSessions: 12,
    date: '2025-10-10',
    aesthetician: 'Dr. Lisa Park',
    notes: 'Client responded well to treatment. Skin showing improvement.',
    beforeImages: [],
    afterImages: [],
    feedback: 'Very satisfied with results'
  },
  {
    id: 2,
    clientId: 1,
    treatmentType: 'Microdermabrasion',
    sessionNo: 3,
    totalSessions: 6,
    date: '2025-09-25',
    aesthetician: 'Dr. Maria Chen',
    notes: 'Mild redness post-treatment, subsided within 2 hours.',
    beforeImages: [],
    afterImages: [],
    feedback: 'Excellent experience'
  }
];

export const mockMessages = [
  {
    id: 1,
    clientId: 1,
    clientName: 'Emily Johnson',
    lastMessage: 'Thank you for the wonderful treatment!',
    timestamp: '2025-10-12 3:45 PM',
    unread: false,
    messages: [
      { sender: 'client', text: 'Hi, I wanted to ask about aftercare instructions', time: '2025-10-12 2:30 PM' },
      { sender: 'admin', text: 'Hello Emily! Of course, avoid direct sunlight and use SPF 50+', time: '2025-10-12 2:45 PM' },
      { sender: 'client', text: 'Thank you for the wonderful treatment!', time: '2025-10-12 3:45 PM' }
    ]
  },
  {
    id: 2,
    clientId: 2,
    clientName: 'Sarah Williams',
    lastMessage: 'Can I reschedule my appointment?',
    timestamp: '2025-10-11 1:20 PM',
    unread: true,
    messages: [
      { sender: 'client', text: 'Can I reschedule my appointment?', time: '2025-10-11 1:20 PM' }
    ]
  },
  {
    id: 3,
    clientId: 3,
    clientName: 'Jessica Martinez',
    lastMessage: 'Looking forward to my next session!',
    timestamp: '2025-10-10 11:00 AM',
    unread: false,
    messages: [
      { sender: 'client', text: 'The results are amazing!', time: '2025-10-10 10:30 AM' },
      { sender: 'admin', text: "We're so happy to hear that! See you next week.", time: '2025-10-10 10:45 AM' },
      { sender: 'client', text: 'Looking forward to my next session!', time: '2025-10-10 11:00 AM' }
    ]
  }
];

export const statsData = {
  client: {
    nextAppointment: 'Oct 18, 10:00 AM',
    sessionsCompleted: 8,
    upcomingTreatments: 2,
    totalVisits: 12
  },
  admin: {
    totalClients: 47,
    totalTreatments: 238,
    monthlyRevenue: '$28,450',
    activeAppointments: 15
  }
};

export const chartData = {
  monthly: [
    { month: 'Jan', treatments: 18, clients: 12 },
    { month: 'Feb', treatments: 22, clients: 15 },
    { month: 'Mar', treatments: 28, clients: 18 },
    { month: 'Apr', treatments: 25, clients: 16 },
    { month: 'May', treatments: 32, clients: 21 },
    { month: 'Jun', treatments: 35, clients: 24 },
    { month: 'Jul', treatments: 30, clients: 20 },
    { month: 'Aug', treatments: 38, clients: 26 },
    { month: 'Sep', treatments: 42, clients: 28 },
    { month: 'Oct', treatments: 45, clients: 30 }
  ],
  revenue: [
    { month: 'Jan', revenue: 18500 },
    { month: 'Feb', revenue: 22000 },
    { month: 'Mar', revenue: 28000 },
    { month: 'Apr', revenue: 25500 },
    { month: 'May', revenue: 32000 },
    { month: 'Jun', revenue: 35500 },
    { month: 'Jul', revenue: 30000 },
    { month: 'Aug', revenue: 38000 },
    { month: 'Sep', revenue: 42000 },
    { month: 'Oct', revenue: 28450 }
  ]
};

export const treatmentTypes = [
  'Facial Treatment',
  'Chemical Peel',
  'Microdermabrasion',
  'Laser Hair Removal',
  'Botox',
  'Dermal Fillers',
  'Skin Tightening',
  'LED Light Therapy',
  'Hydrafacial',
  'Micro-needling'
];

export const aestheticians = [
  'Dr. Lisa Park',
  'Dr. Maria Chen',
  'Dr. Sarah Thompson',
  'Dr. Jessica Lee'
];
