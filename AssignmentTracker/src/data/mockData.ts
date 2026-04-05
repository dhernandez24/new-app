import { Assignment, User } from '../types';

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const dayAfter = new Date(today);
dayAfter.setDate(dayAfter.getDate() + 2);
const nextWeek = new Date(today);
nextWeek.setDate(nextWeek.getDate() + 5);

export const mockUser: User = {
  name: 'Alex',
  coinBalance: 45,
  unlockedItems: ['default_theme'],
};

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Calculus Problem Set 5',
    type: 'homework',
    duration: 120,
    deadline: new Date(today.setHours(23, 59)),
    description: 'Chapters 8-9 integration problems',
    status: 'pending',
    coinReward: 5,
    createdAt: new Date(),
  },
  {
    id: '2',
    title: 'Biology Lab Report',
    type: 'homework',
    duration: 90,
    deadline: tomorrow,
    description: 'Submit findings on cell mitosis experiment',
    status: 'pending',
    coinReward: 5,
    createdAt: new Date(),
  },
  {
    id: '3',
    title: 'CS Midterm Exam',
    type: 'test',
    duration: 180,
    deadline: dayAfter,
    description: 'Data structures and algorithms',
    status: 'pending',
    coinReward: 10,
    createdAt: new Date(),
  },
  {
    id: '4',
    title: 'Group Project Presentation',
    type: 'task',
    duration: 60,
    deadline: nextWeek,
    description: 'Marketing plan presentation slides',
    status: 'pending',
    coinReward: 5,
    createdAt: new Date(),
  },
  {
    id: '5',
    title: 'History Essay Draft',
    type: 'homework',
    duration: 150,
    deadline: nextWeek,
    description: 'World War II impacts on economy',
    status: 'pending',
    coinReward: 5,
    createdAt: new Date(),
  },
];
