import { Form } from '../components/Register/Form';
import { Heading } from '../components/Register/Heading';

export const Register = () => {

    return (
        <div className="register">
            <div className="container register">
                <div className="row">
                    <div className="col-1 col-sm-2 col-lg-3"></div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <Heading/>
                        <Form/>
                    </div>
                    <div className="col-1 col-sm-2 col-lg-3"></div>
                </div>
            </div>
        </div>
    );
}