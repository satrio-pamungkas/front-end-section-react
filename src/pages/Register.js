import { Alert } from '../components/Register/Alert';
import { Form } from '../components/Register/Form';

export const Register = () => {

    return (
        <div className="register">
            <div className="container register">
                <Alert/>
                <Form/>
            </div>
        </div>
    );
}