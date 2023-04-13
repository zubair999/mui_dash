// project import
import MainCard from 'components/MainCard';

import FirebaseRegister from '../authentication/auth-forms/AuthRegister';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card">
        <FirebaseRegister />
    </MainCard>
);

export default SamplePage;
