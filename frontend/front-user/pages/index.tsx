import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { User } from "@/types/User";
import CardMaterial from "@/components/material/CardMaterial";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LinearLoader from "@/components/material/LinearLoader";
import { getUser } from "@/fetch/user";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loanding, setLoanding] = useState<boolean>(true);
  const [dataUsers, setDataUsers] = useState<User[]>([
    {
      id: "1",
      userName: "Lucas dos Santos",
      email: "lucass235@gmail.com",
      age: "23",
      image: "./lucas.jpg",
    },
    {
      id: "2",
      userName: "Davi dos Santos",
      email: "davipro@gmail.com",
      age: "14",
      image: "./davi.png",
    },
  ]);

  // pegar valores de uma api
  useEffect(() => {
    setLoanding(true);

    const dataUser: any = getUser();
    // if (dataUser) {
    //   setDataUsers(dataUser);
    // }
    console.log("dataUser: ", dataUser);
    setLoanding(false);
  }, []);

  if (loanding) return <LinearLoader />;
  return (
    <>
      <Head>
        <title>Usuários</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              color: "white",
              fontWeight: "bold",
              marginBottom: "50px",
              marginTop: "10px",
            }}
          >
            Clientes
          </h1>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {dataUsers.map((user) => (
              <Grid item key={user.id} md={6}>
                <CardMaterial {...user} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}
