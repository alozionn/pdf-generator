import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  }
});

// Create Document Component
const PdfDocument = ({children} : {children: React.ReactNode}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {children}
    </Page>
  </Document>
);


export default PdfDocument;
