import {TouchableOpacity, Text, View, Image} from 'react-native';
import {styles} from '../styles/styleProfile';

const profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('login');
          }}>
          <Image
            source={require('../img/exit.png')}
            style={styles.imgHeader2}></Image>
        </TouchableOpacity>

        <Image
          source={require('../img/Avatar-Protag-300x300.jpg')}
          style={styles.imgHeader}></Image>
        <Text style={styles.textHeader}>Wilson Novaldo</Text>
        <Text style={styles.textHeader2}>ICT Intern</Text>
      </View>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.aboutMeContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        sodales sapien. Sed ut tellus ex. Nulla tincidunt mi sed lacus facilisis
        vestibulum. In et diam eu elit mollis consequat. Proin accumsan eget dui
        sit amet rutrum. Fusce iaculis neque sed tincidunt laoreet.
      </Text>
      <Text style={styles.skills}>Skills</Text>
      <View style={styles.skillsView}>
        <View style={styles.rowDirection}>
          <Image
            source={require('../img/javascript.png')}
            style={[styles.iconSkills,{marginLeft:20}]}></Image>
          <Text style={styles.textIcon}>Javascript</Text>
          <Image
            source={require('../img/python.png')}
            style={[styles.iconSkills,{marginLeft:60}]}></Image>
          <Text style={styles.textIcon}>Python</Text>
        </View>
        <View style={styles.rowDirection}>
          <Image
            source={require('../img/photoshop.png')}
            style={[styles.iconSkills,{marginLeft:20}]}></Image>
          <Text style={styles.textIcon}>Photoshop</Text>
          <Image
            source={require('../img/html.png')}
            style={[styles.iconSkills,{marginLeft:60}]}></Image>
          <Text style={styles.textIcon}>HTML</Text>
        </View>
      </View>
      <View style={styles.rowDirection}>
        <View style={styles.expEdu}>
          <Text style={styles.title}>Experience</Text>
          <Text style={styles.experienceJob}>
            Mobile Developer 2022 | present
          </Text>
          <Text style={styles.experienceJob}>
            Create mobile application with react native technology for android
            and ios platform
          </Text>
        </View>
        <View style={styles.expEdu}>
          <Text style={styles.title}>Education</Text>
          <Text style={styles.experienceJob}>Bina Nusantara University</Text>
          <Text style={styles.experienceJob}>
            Computer Science - Mathematics {'\n'}2018 - 2023
          </Text>
        </View>
      </View>
      <Text style={styles.title}>My Interests</Text>
      <View style={styles.rowDirection}>
        <View style={styles.interest}>
          <Image
            source={require('../img/music.png')}
            style={[styles.iconInterest,{marginLeft:20}]}></Image>
          <Text style={styles.textIcon}>Music</Text>
        </View>
        <View style={styles.interest}>
          <Image
            source={require('../img/game.png')}
            style={[styles.iconInterest,{marginLeft:50}]}></Image>
          <Text style={styles.textIcon}>Game</Text>
        </View>
        <Image
          source={require('../img/travel.png')}
          style={[styles.iconInterest,{marginLeft:70}]}></Image>
        <Text style={styles.textIcon}>Travel</Text>
        <View style={styles.interest}></View>
      </View>
    </View>
  );
};

export default profile;
