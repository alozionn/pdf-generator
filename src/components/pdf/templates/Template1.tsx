'use client';
import { useState } from 'react';

import { View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Template1 = () => {
  const [firstEl, setFirstEl] = useState(false);

  return (
    <>
      <input type="checkbox" value="asd" />
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </>
  );
};

export default Template1;
