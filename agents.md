# Project: Assignment Tracker Game

## Overview
Build a mobile app for college students that helps them track assignments with light gamification.
 
 
Users can:
- add assignments with a title, type, estimated duration, and deadline
- view upcoming assignments
- mark assignments as complete
- earn coins for completing assignments
- spend coins on simple games or cosmetic UI unlocks
- view due dates on a calendar screen

The app should feel motivating, simple, and student-friendly rather than childish.

---

## Product Goals
- Help students stay on top of schoolwork
- Make completing assignments feel rewarding
- Keep the UI clean, mobile-first, and easy to use
- Focus on a strong front-end prototype first

---

## Target Users
College students who want a simple assignment tracker with light game elements.

---

## Core Features
1. Dashboard / Home screen
   - show greeting or app title
   - show today's date
   - show user name and coin balance
   - show upcoming assignments grouped by day
   - empty state when there are no assignments yet

2. Add Assignment flow
   - title
   - type of assignment (homework, test, task, other)
   - duration estimate
   - deadline date and time
   - optional description

3. Calendar screen
   - monthly calendar view
   - highlight dates with assignments due
   - allow user to tap a day to see assignments

4. Assignment completion
   - users can mark assignment complete
   - award coins when completed
   - possible bonus for early completion
   - reduced reward if completed late

5. Game / Rewards screen
   - show current coin balance
   - allow coins to be spent on simple mini games or cosmetic unlocks
   - keep this lightweight for the first prototype

---

## Gamification Rules
- Completing an assignment gives coins
- Coin reward is based on assignment duration or difficulty
- Early completion may give a bonus
- Late completion may give fewer coins
- Coins can be used for:
  - mini games
  - UI themes
  - profile/customization items

For the first prototype, use simple fixed rewards:
- complete = 5 coins
- early completion = 10 coins
- late completion = 3 coins

---

## Visual / UI Direction
Use the attached lo-fi wireframes as inspiration.

Style direction:
- mobile-first
- simple layout
- rounded cards and buttons
- soft neutral colors with a few accent colors
- clean, minimal, modern student app feel
- light gamification, not overly childish
- clear hierarchy and spacing
- bottom tab navigation

Possible screens based on wireframes:
- Home
- Calendar
- Add Assignment
- Assignment Details / Type Selection
- Games / Rewards

---

## Tech Stack
- Expo React Native
- TypeScript
- React Navigation
- Zustand or simple React state for prototype
- AsyncStorage for local persistence
- No backend required in first version

---

## Data Model
Each assignment should include:
- id
- title
- type
- duration
- deadline
- description
- status
- coinReward
- createdAt
- completedAt

User data should include:
- name
- coinBalance
- unlockedItems

---

## Coding Rules
- Use functional components
- Use TypeScript
- Keep files organized and readable
- Use reusable components for cards, buttons, assignment rows, and coin badges
- Keep styling clean and consistent
- Build front-end screens first with mock data
- Do not over-engineer

---

## MVP Build Order
1. Set up Expo app with bottom tab navigation
2. Create Home screen based on wireframes
3. Create Add Assignment screen and form
4. Create Calendar screen
5. Create reusable Assignment Card component
6. Implement complete-assignment action with coin rewards
7. Create basic Rewards / Games screen
8. Add local persistence with AsyncStorage

---

## Deliverables
The first version should be a clickable mobile prototype with realistic mock data and polished front-end screens.