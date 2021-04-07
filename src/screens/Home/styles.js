import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkPurple,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  cards: {
    width: '45%',
    backgroundColor: COLORS.grey,
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 20,
  },
  sliderCard: {
    width: '85%',
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    padding: 20,
  },
  marginTOP: {marginTop: 10},
  sliderSize: {width: 200, height: 40},
  heading: {fontSize: 20, fontWeight: 'bold', color: COLORS.lightgrey},
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 10,
  },
  card: {
    width: '45%',
    backgroundColor: COLORS.grey,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
  },
  marginLEFT: {marginLeft: 20},
  button: {
    width: '100%',
    paddingVertical: 30,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: COLORS.pink,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
