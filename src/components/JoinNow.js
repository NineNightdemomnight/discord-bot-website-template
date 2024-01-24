import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Join us now!</h3>
        </div>
        <div className="joinUs-para p-color">
          Invite our bot to your Discord server!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="#">
            Invite now!
          </Link>
href="https://discord.com/api/oauth2/authorize?client_id=1148180415815888947&permissions=8&scope=bot"
        </button>
      </section>
    </>
  );
};

export default JoinNow;
