import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import Timeline from '../components/TimeLine/TimeLine';


const projects = ()=>{
    return(
        <Layout>
            <Timeline/>
            <Acomplishments/>
        </Layout>
    );
};

export default projects;