import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../utils/colors';

type AssignmentType = 'homework' | 'test' | 'task' | 'other';

const TYPE_OPTIONS: AssignmentType[] = ['homework', 'test', 'task', 'other'];

export const AddAssignmentScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [selectedType, setSelectedType] = useState<AssignmentType>('homework');
  const [duration, setDuration] = useState<string>('60');
  const [deadlineDate, setDeadlineDate] = useState<string>('');
  const [deadlineTime, setDeadlineTime] = useState<string>('3:00 PM');
  const [description, setDescription] = useState('');

  const addAssignment = () => {
    // This is a prototype; simply navigate back to Home
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>adding assignment</Text>

        <View style={styles.card}>
          <Text style={styles.label}>title:</Text>
          <TextInput
            style={styles.input}
            placeholder="add title"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>add deadline</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.flexHalf]}
              placeholder="Date"
              value={deadlineDate}
              onChangeText={setDeadlineDate}
            />
            <TextInput
              style={[styles.input, styles.flexHalf]} 
              placeholder="Time"
              value={deadlineTime}
              onChangeText={setDeadlineTime}
            />
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>type of assignment</Text>
          <View style={styles.typeList}>
            {TYPE_OPTIONS.map((t) => (
              <TouchableOpacity
                key={t}
                style={[styles.typeOption, selectedType === t && styles.typeOptionSelected]}
                onPress={() => setSelectedType(t)}
              >
                <Text style={styles.typeOptionText}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>length of assignment</Text>
          <TextInput
            style={styles.input}
            placeholder="minutes"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>add description</Text>
          <TextInput
            style={[styles.input, styles.multiline]}
            placeholder="description"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={addAssignment}>
          <Text style={styles.addButtonText}>add assignment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 20, fontWeight: '600', color: colors.text, marginBottom: 12, textTransform: 'none' },
  card: { backgroundColor: colors.surface, borderRadius: 20, padding: 18, marginBottom: 16, elevation: 2 },
  label: { fontSize: 14, color: colors.textSecondary, marginBottom: 8 },
  input: { backgroundColor: colors.background, borderRadius: 12, padding: 12, fontSize: 16, borderWidth: 1, borderColor: colors.border },
  multiline: { height: 100, textAlignVertical: 'top' } as any,
  row: { flexDirection: 'row', gap: 8 },
  flexHalf: { flex: 1 },
  typeList: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  typeOption: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 9999, backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border },
  typeOptionSelected: { backgroundColor: colors.primary, borderColor: colors.primary },
  typeOptionText: { color: colors.text, fontSize: 14 },
  addButton: { marginTop: 6, backgroundColor: colors.primary, borderRadius: 12, paddingVertical: 14, alignItems: 'center', justifyContent: 'center' },
  addButtonText: { color: colors.surface, fontWeight: '600' },
});
