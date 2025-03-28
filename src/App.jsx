import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
    <h1>Componente app</h1>
    <section className="hero is-dark">
    <div className="hero-body">
      <p className="title">Personal Digital Assistance</p>
    </div>
    </section>

    <div className="conteirner">
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <ProfileCard
            title="alexa"
            handle="@alexa24"
            image="https://upload.wikimedia.org/wikipedia/commons/c/cc/Amazon_Alexa_App_Logo.png"
            />
          </div>

          <div className="column is-4">
            <ProfileCard
            title="cortana"
            handle="@cortana"
            image="https://wallpapers.com/images/featured/halo-cortana-0f24lzzchpkrhonv.jpg"
            />
          </div>

          <div className="column is-4">
            <ProfileCard
            title="siri"
            handle="@siri "
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaZVBdmqGWyTbAc4H_zSRMHIOxCgPoasqVA&s"
            />
          </div>

          <div className="column is-4">
            <ProfileCard/>
          </div>
          <div className="column is-4">
            <ProfileCard/>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default App