import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkPurple,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: 20,
  },
  paddingTOP: {paddingTop: 20},
  card: {
    width: '85%',
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 50,
    height: '60%',
  },
  normal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  result: {
    fontSize: 60,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.lightgrey,
    marginTop: 20,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 10,
  },

  description: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 30,
    width: '80%',
    textAlign: 'center'
  },
  btn: {
    width: '60%',
    backgroundColor: 'rgb(24,26,45)',
    padding: 20,
    marginTop: 60,
    alignSelf: 'center',
  },
  content: {fontWeight: 'bold', color: COLORS.white, textAlign: 'center'},

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
