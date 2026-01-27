import "./Grid.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import type { TeamType } from "../../type/teamType";

const GridTeam = (data: TeamType) => {
    return (
        <div className="team-card" key={data.id}>
            <div className="image-wrapper">
                <img src={data.photo} alt={data.name} />

                <div className="overlay">
                    <div className="social-icons">
                        <a><FaFacebookF /></a>
                        <a><FaTwitter /></a>
                        <a><FaInstagram /></a>
                        <a><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <h3>{data.name}</h3>
            <p>{data.role}</p>
        </div>
    );
};

export default GridTeam;

