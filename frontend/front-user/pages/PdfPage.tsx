import { NextPage } from "next";
import { PDFViewer, Document, Page, Text } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { Container } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

const PdfRenderer: NextPage = () => {
  const router = useRouter();
  const userName = router.query.userName;
  const age = router.query.age;
  const email = router.query.email;

  return (
    <>
      <Container maxWidth={"lg"} sx={{ height: "98vh", width: "100vw" }}>
        <PDFViewer width={"100%"} height={"100%"}>
          <Document title={"hello world!"}>
            <Page>
              <Text>hello world</Text>
              <Text>{userName}</Text>
              <Text>{age}</Text>
              <Text>{email}</Text>
            </Page>
          </Document>
        </PDFViewer>
      </Container>
    </>
  );
};

export default dynamic(() => Promise.resolve(PdfRenderer), {
  ssr: false,
});
