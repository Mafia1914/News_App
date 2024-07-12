// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const BottomSheet = ({ visible, onClose, onSave }) => {
//   const [taskName, setTaskName] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleSave = () => {
//     onSave({ taskName, description, date });
//     resetState();
//   };

//   const handleCancel = () => {
//     onClose();
//     resetState();
//   };

//   const resetState = () => {
//     setTaskName('');
//     setDescription('');
//     setDate(new Date());
//     setShowDatePicker(false);
//   };

//   const handleDateConfirm = (selectedDate) => {
//     setShowDatePicker(false);
//     if (selectedDate) {
//       setDate(selectedDate);
//     }
//   };

//   const openDatePicker = () => {
//     setShowDatePicker(true);
//   };

//   const closeDatePicker = () => {
//     setShowDatePicker(false);
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <TouchableOpacity
//         style={styles.modalOverlay}
//         onPress={onClose}
//       >
//         <View style={styles.modalContent}>
//           <View style={styles.bottomSheet}>
//             <Text style={styles.bottomSheetTitle}>Add Task</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Task Name"
//               value={taskName}
//               onChangeText={setTaskName}
//             />
//             <TextInput
//               style={[styles.input, styles.descriptionInput]}
//               placeholder="Description"
//               multiline={true}
//               numberOfLines={4}
//               value={description}
//               onChangeText={setDescription}
//             />
//             <TouchableOpacity style={styles.datePickerButton} onPress={openDatePicker}>
//               <Text style={styles.datePickerText}>Select Date and Time</Text>
//             </TouchableOpacity>
//             <DateTimePickerModal
//               isVisible={showDatePicker}
//               mode="datetime"
//               date={date}
//               onConfirm={handleDateConfirm}
//               onCancel={closeDatePicker}
//             />
//             <Text style={styles.selectedDateTime}>
//               Selected Date and Time: {date instanceof Date ? date.toLocaleString() : ''}
//             </Text>
//             <View style={styles.buttonsContainer}>
//               <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
//                 <Text style={styles.buttonText}>Save</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
//                 <Text style={styles.buttonText}>Cancel</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: 'transparent',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     flex: 1,
//   },
//   bottomSheet: {
//     backgroundColor: '#FFFFFF',
//     width: '100%',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   bottomSheetTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     width: '100%',
//   },
//   descriptionInput: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   datePickerButton: {
//     backgroundColor: '#63D9F3',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   datePickerText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   selectedDateTime: {
//     marginTop: 10,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     paddingVertical: 15,
//     borderRadius: 5,
//     marginHorizontal: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   saveButton: {
//     backgroundColor: '#4CAF50',
//   },
//   cancelButton: {
//     backgroundColor: '#FF5722',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default BottomSheet;
