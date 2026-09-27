import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "A little curiosity | Yuvraj Riyar",
  description: "A small detour into flour, fire and a rather consuming hobby.",
  robots: { index: false, follow: false },
};

export default function AQuiteReasonableDetour() {
  return (
    <main className={styles.room}>
      <div className={styles.note}>
        <p className={styles.aside}>Well, this is interesting.</p>
        <h1>You clicked the pizza.</h1>
        <p>A person of priorities, clearly.</p>
        <p>If you fancy following my pizzaiolo journey, there is a little more to it than that photograph. Two years with a Roccbox, a Dome XL, plenty of flour, and a few lessons learnt the warm way.</p>
        <a className={styles.journal} href="https://yr-00xl.yuvi200430.chatgpt.site" rel="nofollow">Step inside YR / 00X(L) <span aria-hidden="true">↗</span></a>
        <Link className={styles.back} href="/#about">Back to the respectable bit</Link>
      </div>
    </main>
  );
}
