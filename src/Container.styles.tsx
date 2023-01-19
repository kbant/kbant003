import {NativeWindStyleSheet} from 'nativewind';

NativeWindStyleSheet.create({
  styles: {
    container2: {
      width: '100%',
    },
    'container2@0': {
      maxWidth: 640,
    },
    'container2@1': {
      maxWidth: 768,
    },
    'container2@2': {
      maxWidth: 1024,
    },
    'container2@3': {
      maxWidth: 1280,
    },
    'container2@4': {
      maxWidth: 1536,
    },
  },
  atRules: {
    container2: [
      [['media', '(min-width: 640px)']],
      [['media', '(min-width: 768px)']],
      [['media', '(min-width: 1024px)']],
      [['media', '(min-width: 1280px)']],
      [['media', '(min-width: 1536px)']],
    ],
  },
  topics: {
    container: ['width'],
  },
});
