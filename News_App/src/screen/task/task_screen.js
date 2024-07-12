import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const TaskScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const data = [
    { label: 'Add Video Link', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          {value ? data.find(item => item.value === value)?.label : ''}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <View style={styles.addText}>
              <MaterialCommunityIcons name="plus" color={'grey'} size={50} />
              <Text style={styles.cardText}>Add Post image</Text>
            </View>
          </View>
        </View>

        <View style={styles.taskCardsContainer}>
          <View style={styles.taskCard}>
            <Text style={styles.cardTitle}>Add Heading</Text>
          </View>
          <View style={styles.taskCard}>
            <Text style={styles.cardTitle}>Add Tag</Text>
          </View>
          <View style={styles.taskCard}>
            <Text style={styles.cardTitle}>Add Category</Text>
          </View>
          <View style={styles.taskCard}>
            <Text style={styles.cardTitle}>Add Video Link</Text>
          </View>
        </View>

        <View style={styles.dropdownContainer}>
          {/* Dropdown Component */}
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'grey' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name=""
                size={20}
              />
            )}
          />
        </View>
        <TextInput
        style={styles.input}
        // value={this.state.value}
        // onChangeText={text=>this.setState({value:text})}
        multiline={true}
        numberOfLines={4}
   />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 10,
    height: 150,
  },
  addText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardText: {
    fontSize: 16,
    color: 'grey',
    marginLeft: 10,
  },
  taskCardsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  taskCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 15,
    marginBottom: 15,
    height: 50,
  },
  cardTitle: {
    fontSize: 14,
    color: 'black',
  },
  dropdownContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  input:{
    marginTop:20,
    borderRadius:10,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  }
});

export default TaskScreen;
