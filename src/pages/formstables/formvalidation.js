// project import
import MainCard from 'components/MainCard';

import FirebaseRegister from '../authentication/auth-forms/AuthRegister';

// ==============================|| SAMPLE PAGE ||============================== //

const forms = () => (
    <MainCard title="Sample Card">
        <FirebaseRegister />
    </MainCard>
);

export default forms;
