export type Specialist = {
    avatar: string;
    id: number;
    name: string;
    surname: string;
    profession: string;
    rate: number;
    rateAmount: number;
    myRate: number | null;
    favorite: boolean;
    gender: 'male' | 'female';
}


const PROFFESSIONS = ['dentist', 'orthodontist', 'hygienist', 'therapist', 'endodontist', 'prosthodontist', 'periodontist', 'pediatric dentist', 'oral surgeon', 'cosmetic dentist', 'maxillofacial surgeon', 'oral pathologist', 'public health dentist', 'forensic odontologist', 'geriatric dentist', 'veterinary dentist', 'dental anesthesiologist', 'dental radiologist', 'dental technician', 'dental therapist', 'dental hygienist', 'dental assistant', 'dental receptionist', 'dental nurse', 'dental technician', 'dental ceramist', 'dental sales representative', 'dental educator', 'dental consultant', 'dental laboratory owner', 'dental laboratory manager', 'dental laboratory technician', 'dental laboratory assistant', 'dental laboratory ceramist', 'dental laboratory CAD/CAM designer', 'dental laboratory CAD/CAM technician', 'dental laboratory CAD/CAM operator', 'dental laboratory CAD/CAM programmer', 'dental laboratory CAD/CAM engineer', 'dental laboratory CAD/CAM specialist', 'dental laboratory CAD/CAM consultant', 'dental laboratory CAD/CAM trainer', 'dental laboratory CAD/CAM educator', 'dental laboratory CAD/CAM manager', 'dental laboratory CAD/CAM owner', 'dental laboratory CAD/CAM director', 'dental laboratory CAD/CAM supervisor', 'dental laboratory CAD/CAM operator', 'dental laboratory CAD/CAM technician', 'dental laboratory CAD/CAM assistant', 'dental laboratory CAD/CAM ceramist', 'dental laboratory CAD/CAM designer', 'dental laboratory CAD/CAM programmer', 'dental laboratory CAD/CAM engineer', 'dental laboratory CAD/CAM specialist', 'dental laboratory CAD/CAM consultant', 'dental laboratory CAD/CAM trainer', 'dental laboratory CAD/CAM educator', 'dental laboratory CAD/CAM manager', 'dental laboratory CAD/CAM owner', 'dental laboratory CAD/CAM director', 'dental laboratory CAD/CAM supervisor', 'dental laboratory CAD/CAM operator', 'dental laboratory CAD/CAM technician', 'dental laboratory CAD/CAM assistant', 'dental laboratory CAD/CAM ceramist', 'dental laboratory CAD/CAM designer', 'dental laboratory CAD/CAM programmer',];
const FEMALE_NAMES = [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Charlotte',
  'Amelia',
  'Harper',
  'Evelyn',
  'Abigail',
  'Emily',
  'Elizabeth',
  'Mila',
  'Ella',
  'Avery',
  'Sofia',
  'Camila',
  'Aria',
  'Scarlett',
  'Victoria',
  'Madison',
  'Luna',
  'Grace',
  'Chloe',
  'Penelope',
  'Layla',
  'Riley',
  'Zoey',
  'Nora',
  'Lily',
  'Eleanor',
  'Hannah',
  'Lillian',
  'Addison',
  'Aubrey',
  'Ellie',
  'Stella',
  'Natalie',
  'Zoe',
  'Leah',
  'Hazel',
  'Violet',
  'Aurora',
  'Savannah',
  'Audrey',
  'Brooklyn',
  'Bella',
  'Claire',
  'Skylar',
  'Lucy',
  'Paisley'
];
const MALE_NAMES = [
  'Liam',
  'Noah',
  'William',
  'James',
  'Oliver',
  'Benjamin',
  'Elijah',
  'Lucas',
  'Mason',
  'Logan',
  'Alexander',
  'Ethan',
  'Jacob',
  'Michael',
  'Daniel',
  'Henry',
  'Jackson',
  'Sebastian',
  'Aiden',
  'Matthew',
  'Samuel',
  'David',
  'Joseph',
  'Carter',
  'Owen',
  'Wyatt',
  'John',
  'Jack',
  'Luke',
  'Jayden',
  'Dylan',
  'Grayson',
  'Levi',
  'Isaac',
  'Gabriel',
  'Julian',
  'Mateo',
  'Anthony',
  'Jaxon',
  'Lincoln',
  'Joshua',
  'Christopher',
  'Andrew',
  'Theodore',
  'Caleb',
  'Ryan',
  'Asher',
  'Nathan',
  'Thomas',
  'Leo',
  'Isaiah'
];
const SURNAMES = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark'];

const generateSpecialist = (): Specialist => {
  const gender = Math.floor(Math.random() * 2) === 1 ? 'male' : 'female';
  const names = gender === 'male' ? MALE_NAMES : FEMALE_NAMES;

  return {
    avatar: `https://randomuser.me/api/portraits/${gender === 'female' ? 'women' : 'men' }/${Math.floor(Math.random() * 85)}.jpg`,
    id: new Date().valueOf() + Math.random(),
    name: names[Math.floor(Math.random() * names.length)],
    surname: SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
    profession: PROFFESSIONS[Math.floor(Math.random() * PROFFESSIONS.length)],
    rate: (Math.floor(Math.random() * 40) / 10) + 1,
    rateAmount: Math.floor(Math.random() * 5) + 1, 
    myRate: null, 
    favorite: false,
    gender,
  }
}

export const getSpecialistApi = (amount = 5000) => {
  return new Promise<Specialist[]>(resolve =>
    setTimeout(() => resolve(new Array(amount).fill(0).map(() => generateSpecialist())), 1000)
  )
}