import {useState} from 'react';
import {Keyboard, TextInput, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native';
import {styles} from '../styles/styleLogin';

const login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={styles.header}>
        Welcome {'\n'}
        to my profile
      </Text>
      <Text style={styles.inputHeader}>Nama Lengkap</Text>
      <TextInput
        style={styles.input}
        onChangeText={textName => setName(textName)}></TextInput>
      <Text style={styles.inputHeader}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={textPass => setPassword(textPass)}></TextInput>
      <TouchableOpacity
        onPress={() => {
          if (!name.trim()) {
            alert('Please Enter Name!');
          } else if (!password.trim()) {
            alert('Please Enter Password!');
          } else if (password == '12345') {
            navigation.navigate('profile');
          } else {
            alert('Invalid Password!');
          }
        }}
        style={styles.buttonSubmit}>
        <Text style={styles.textSubmit}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;
