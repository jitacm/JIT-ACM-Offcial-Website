import Head from "next/head";
import TeamSection from "./TeamSection";

export default function Teams2() {
  return (
    <div id="teams">
      <Head>
        <title>Our Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TeamSection />
      </main>
    </div>
  );
}
