import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mr. & Mrs. G. Abdul Ahad</h2>

        {/* <h5 className="address mb-3">
                    Proprietor: Mohammed Ali Jewellers,
                    <br /> Shroff Bazaar, Adoni.
                </h5> */}
        <h5 className="address mb-3">
          Residence: At NGO's Colony,
          <br /> Near Gandhi Park,
          <br /> Adoni, Kurnool Dist.,
          <br /> AP - 518 301.
        </h5>
        <p className="address">
          Contact: <br />
          {/* +91 73966 62484, <br /> */}
          +91 98855 76202.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
