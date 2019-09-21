import { Dimensions, StatusBar } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight || 24;
export const TABS_WIDTH = WIDTH_SCREEN / 5;

export const USER_SUGGESTIONS = [
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    username: '@Eduardo'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    username: '@Rafa'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    username: '@Lucas'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    username: '@Renato'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/matheus.png'),
    username: '@Marlon'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    username: '@Eduardo'
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    username: '@Rafa'
  }
];

export const SETTINGS = [
  {
    id: Math.random().toString(),
    title: 'Meu Nome',
    subtitle: 'Matheus Bueno'
  },
  {
    id: Math.random().toString(),
    title: 'Meu email',
    subtitle: 'matheus@gempe.com'
  }
];

const transferenceValue = (ramdom = 80) => Number((Math.random() * ramdom).toFixed(2));

export const ACTIVITIES = [
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    sender: '@eduardo',
    receiver: 'Você',
    value: transferenceValue(50),
    likes: 1,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    sender: '@rafa',
    receiver: 'Você',
    value: transferenceValue(12),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    sender: '@eduardo',
    receiver: '@rafa',
    value: transferenceValue(),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/matheus.png'),
    sender: '@marlon',
    receiver: 'eduardo',
    value: transferenceValue(42),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    sender: '@lucas',
    receiver: '@renato',
    value: transferenceValue(),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    sender: '@rafa',
    receiver: 'Você',
    value: transferenceValue(122),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/eduardo.png'),
    sender: '@eduardo',
    receiver: 'Você',
    value: transferenceValue(40),
    likes: 0,
    comments: 0
  },
  {
    id: Math.random().toString(),
    avatar: require('../../assets/users/rafa.png'),
    sender: '@rafa',
    receiver: 'Você',
    value: transferenceValue(),
    likes: 0,
    comments: 0
  }
];

export const CONTACTS = [
  {
    id: '1',
    userName: '@buenno',
    name: 'Matheus Bueno'
  },

  {
    id: '2',
    userName: '@beatriz.sabbatini',
    name: 'Beatriz Sabbatini'
  },
  {
    id: '3',
    userName: '@eduardo.spagna',
    name: 'Eduardo Spagna'
  },
  {
    id: '4',
    userName: '@marlon.lacerda',
    name: 'Marlon Lacerda'
  }
];
