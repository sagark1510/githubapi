import {StyleSheet, Platform, Dimensions} from 'react-native';
import _ from 'lodash';

const {height, width} = Dimensions.get('window');

const spaces = {
  s: 5,
  m: 10,
  l: 15,
  xl: 20,
  xxl: 35,
  jumbo: 65,
};

export const style = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  padContainer: {
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  shadow:
    Platform.OS == 'ios'
      ? {
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 2},
          shadowRadius: 2,
          shadowOpacity: 0.3,
        }
      : {elevation: 2},
  textCenter: {
    textAlign: 'center',
  },
};

_.forIn(spaces, (value, key) => (style[`m${key}`] = {margin: value}));
_.forIn(spaces, (value, key) => (style[`mb${key}`] = {marginBottom: value}));
_.forIn(spaces, (value, key) => (style[`ml${key}`] = {marginLeft: value}));
_.forIn(spaces, (value, key) => (style[`mr${key}`] = {marginRight: value}));
_.forIn(spaces, (value, key) => (style[`mt${key}`] = {marginTop: value}));
_.forIn(spaces, (value, key) => (style[`mv${key}`] = {marginVertical: value}));
_.forIn(
  spaces,
  (value, key) => (style[`mh${key}`] = {marginHorizontal: value}),
);
_.forIn(spaces, (value, key) => (style[`p${key}`] = {padding: value}));
_.forIn(spaces, (value, key) => (style[`pb${key}`] = {paddingBottom: value}));
_.forIn(spaces, (value, key) => (style[`pl${key}`] = {paddingLeft: value}));
_.forIn(spaces, (value, key) => (style[`pr${key}`] = {paddingRight: value}));
_.forIn(spaces, (value, key) => (style[`pt${key}`] = {paddingTop: value}));
_.forIn(spaces, (value, key) => (style[`pv${key}`] = {paddingVertical: value}));
_.forIn(
  spaces,
  (value, key) => (style[`ph${key}`] = {paddingHorizontal: value}),
);
_.forIn(spaces, (value, key) => (style[`br${key}`] = {borderRadius: value}));

export const screen = {height, width};
