import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';
import { RadioButton } from 'react-native-paper';
import RadioGroup from 'react-native-radio-button-group';


export default function App() {

  var radio_props = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];

  var radiogroup_options = [
    {id: 0, label: 'male' },
    {id: 1, label: 'female' },
  ];

   

  const [weight, setWeight] = useState('');
  const [time, settime] = useState(1);
  const [bottles, setbottles] = useState(1);
  const [gender, setGender] = useState('male');
  const [promiles, setPromiles] = useState(0);

  function bloodLevel(){
    let result = 0;
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsL = grams - burning * time;

    
    if (gender == 'male') {
      result = gramsL / (weight * 0.7);
      console.log("checkers")
      console.log(liters)
      console.log(grams)
      console.log(burning)
      console.log(gramsL)
      console.log(weight)
      console.log(bottles)


    }else if (gender == 'female'){
      result = gramsL / (weight * 0.6);

    }

    if(result>=0){
      setPromiles(result)
    }else{
      setPromiles(0)
    }
  }


  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.textTitle}>Weight</Text>
        <TextInput  onChangeText={value => setWeight(value)} placeholder="enter weight" keyboardType='numeric'></TextInput>
      </View>
      <View style={{ backgroundColor: 'white'}}>
        <Text style={styles.textTitle}>Bottles</Text>
        <Picker
          selectedValue={bottles}
          style={{  width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            setbottles(itemValue)
          }>
          <Picker.Item label="1 bottles" value={1} />
          <Picker.Item label="2 bottles" value={2} />
          <Picker.Item label="3 bottles" value={3} />
          <Picker.Item label="4 bottles" value={4} />
          <Picker.Item label="5 bottles" value={5} />

        </Picker>
      </View>
      <View>
        <Text style={styles.textTitle}>Time</Text>
        <Picker
          selectedValue={time}
          style={{width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            settime(itemValue)
          }>
          <Picker.Item label="1 hours" value={1} />
          <Picker.Item label="2 hours" value={2} />
          <Picker.Item label="3 hours" value={3} />
          <Picker.Item label="4 hours" value={4} />
          <Picker.Item label="5 hours" value={5} />
          <Picker.Item label="6 hours" value={6} />
          <Picker.Item label="7 hours" value={7} />
          <Picker.Item label="8 hours" value={8} />
          <Picker.Item label="9 hours" value={9} />
          <Picker.Item label="10 hours" value={10} />
          <Picker.Item label="11 hours" value={11} />
          <Picker.Item label="12 hours" value={12} />
          <Picker.Item label="13 hours" value={13} />
          <Picker.Item label="14 hours" value={14} />
          <Picker.Item label="15 hours" value={15} />
          <Picker.Item label="16 hours" value={16} />
          <Picker.Item label="17 hours" value={17} />
          <Picker.Item label="18 hours" value={18} />
          <Picker.Item label="19 hours" value={19} />
          <Picker.Item label="20 hours" value={20} />
          <Picker.Item label="17 hours" value={21} />
          <Picker.Item label="18 hours" value={22} />
          <Picker.Item label="19 hours" value={23} />
          <Picker.Item label="20 hours" value={24} />

        </Picker>
      </View>
      <View>
        <Text style={styles.textTitle}>gender</Text>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => setGender(value)}
        >
        </RadioForm>
      </View>

      <View>
      <View>
        <Text style={styles.textTitle}>Promiles</Text>
        <Text style={styles.textTitle}>{promiles.toFixed(2)}</Text>
      </View>
        <Button
          title="CALCULATE"
          onPress={bloodLevel}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginTop: 40
  },
  textTitle: {
    color: 'black',
    fontSize: 24,
    marginTop: 10,

  },
  standardHeight: {
    marginTop: 30
  }
});
