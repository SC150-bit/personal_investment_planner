import React from 'react';
import jsPDF from 'jspdf';

const PDFDownload = ({ data }) => {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Personal Investment Plan', 20, 20);
    doc.text(`SIPs: ₹${data.SIP}`, 20, 40);
    doc.text(`Gold: ₹${data.Gold}`, 20, 50);
    doc.text(`Crypto: ₹${data.Crypto} (~${data.BTC} BTC)`, 20, 60);
    doc.save('investment-plan.pdf');
  };

  return <button onClick={handleDownload}>Download Plan as PDF</button>;
};

export default PDFDownload;
