import React from "react";
import { css } from "emotion";

export default function Portfolio() {
  return (
    <div
      className={css`
        margin-top: 2%;
        margin-bottom: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        className={css`
          font-size: 7rem;
          margin-top: 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: font-size 2s;
          border-bottom: 2rem gray solid;
          &:hover {
            font-size: 9rem;
          }
        `}
      >
        Portfolio
      </div>
      <div style={{ fontSize: "3rem", marginTop: "3rem" }}>Why I draw.</div>
      <div
        className={css`
          font-size: 1.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 20%;
          margin-right: 20%;
          margin-top: 2rem;
        `}
      >
        I started drawing since I was little, and with the help of my dad,{" "}
        {`I've`}
        learned many necessities for drawings like modeling the bones and
        appropriate pencils or tools to use when either sketching, coloring, or
        even sculpting. I also used to go to this art lesson at the street
        across my apartment since when I was 5, and the lessons taught me
        shading, coloring, gradaition, and much more. However, I stopped taking
        these lessons about 2 years after. During those years, I still practiced
        to keep my talent alive, and I did that mostly by drawing comics with my
        friends at school, Max and Jinny. We made a small comic series that also
        is viewable in this website. We kept making it until I had to move my
        school to an international school (I used to go to a korean school).
        From there, I discontinued our comics, but the school provided several
        art classes like Art History and Arts & Crafts. This helped me a little
        more. On October of that year, I started taking art classes again at a
        different place, again, at a street across my house. I started drawing
        something every day since, and the art academy helped me a lot more like
        coloring, ratios, and photo realism. This helped me a lot as a base for
        what {`I'll`} be doing in the future. I usually draw because it lets me
        express my emotions and anything I have in my head to the blank sheet of
        paper in a matter of either minutes, hours, or days. However, after the
        long time I spend on a drawing, the final result most of the time is
        worth it.
      </div>
      <div style={{ fontSize: "3rem", marginTop: "3rem" }}>W.</div>
      <div
        className={css`
          font-size: 1.9rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 20%;
          margin-right: 20%;
          margin-top: 2rem;
        `}
      >
        I started drawing since I was little, and with the help of my dad, {`I've`}
        learned many necessities for drawings like modeling the bones and
        appropriate pencils or tools to use when either sketching, coloring, or
        even sculpting. I also used to go to this art lesson at the street
        across my apartment since when I was 5, and the lessons taught me
        shading, coloring, gradaition, and much more. However, I stopped taking
        these lessons about 2 years after. During those years, I still practiced
        to keep my talent alive, and I did that mostly by drawing comics with my
        friends at school, Max and Jinny. We made a small comic series that also
        is viewable in this website. We kept making it until I had to move my
        school to an international school (I used to go to a korean school).
        From there, I discontinued our comics, but the school provided several
        art classes like Art History and Arts & Crafts. This helped me a little
        more. On October of that year, I started taking art classes again at a
        different place, again, at a street across my house. I started drawing
        something every day since, and the art academy helped me a lot more like
        coloring, ratios, and photo realism. This helped me a lot as a base for
        what {`I'll`} be doing in the future. I usually draw because it lets me
        express my emotions and anything I have in my head to the blank sheet of
        paper in a matter of either minutes, hours, or days. However, after the
        long time I spend on a drawing, the final result most of the time is
        worth it.
      </div>
    </div>
  );
}
