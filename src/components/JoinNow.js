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
          <Link href="https://discord.com/oauth2/authorize?client_id=1232158211117682760&permissions=8&integration_type=0&scope=bot">
            <a className="h-color no-decoration">Invite now!</a>
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
