import { Dimensions, Platform } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const isIOS = Platform.OS == 'ios';

export const HEADER_HEIGHT = isIOS ? 44 : 56;
export const padding = {
  xl: 16,
  lg: 10,
  md: 8,
  sm: 6,
  xs: 4,
};
export const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzdlMmJlMmVjNDE2ZmM1NTM3Yjc3MjhiMzI5OTk1NiIsIm5iZiI6MTcyNzY4MjY3NS45Nzk5OSwic3ViIjoiNjY0MGM5ZGY4ZDdlM2Q4NjJhMzZjZTkzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.sd9kQaREwjHVtkUlTwolzOAeot2GsQAOBVBPNL5uzb4';
export const BASE_URL = 'https://api.themoviedb.org/3/';
