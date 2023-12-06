import Particles from "react-tsparticles";
import particleConfig from "../ParticleConfiq/particleConfig";

const ParticleBg = () => {
    return (
        <div>
            <Particles params={particleConfig}></Particles>
        </div>
    );
};

export default ParticleBg;