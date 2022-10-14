import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    backgroundColor: '#222222',
    padding: 30,
    flexDirection: 'column',
    height: 260,
  },
  textHeader: {
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgHeader: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: 'white',
    marginTop: 20,
    borderRadius: 5,
  },
  textHeader2: {
    color: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 15,
  },
  imgHeader2: {
    width: 30,
    height: 30,
    borderWidth: 5,
    tintColor: 'white',
    marginLeft: 310,
  },
  aboutMeContent: {
    marginLeft: 20,
    marginTop: 5,
  },
  skills: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  skillsView: {
    flexDirection: 'column',
    backgroundColor: '#C0C0C0',
    height: 92,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  iconSkills: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
  textIcon: {
    marginTop: 13,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 16,
  },
  experienceJob: {
    marginLeft: 20,
    fontSize: 12,
    marginTop: 5,
  },
  expEdu: {
    flexDirection: 'column',
    width: '50%',
  },
  interest: {
    flexDirection: 'row',
    width: '25%',
  },
  iconInterest: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
  rowDirection: {
    flexDirection: 'row',
  },
  title: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});

export {styles};
