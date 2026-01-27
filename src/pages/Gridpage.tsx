import Grid from "../components/Grid/Grid";
import GridTeam from "../components/Grid/GridTeam1";
import GridTeam2 from "../components/Grid/GridTeam2";
import gridData from "../data/gridData";

const GridPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Team Grid
      </h1>
      <div className="grid-container">
        {gridData.map((item) => (
          <GridTeam2
            id={item.id}
            name={item.name}
            role={item.role}
            photo={item.image}
            bio={item.bio}
          />
        ))}
      </div>
      <Grid />
      <div className="grid-container">
        {gridData.map((item) => (
          <GridTeam
            id={item.id}
            name={item.name}
            role={item.role}
            photo={item.image}
            bio={item.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default GridPage;
