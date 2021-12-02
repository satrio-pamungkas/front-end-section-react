import { Form } from '../components/Register/Form';
import { Heading } from '../components/Register/Heading';

export const Register = () => {

    return (
        <div className="register">
            <div className="container register">
                <div className="row">
                    <div className="col-sm-0 col-md-1 col-lg-2"></div>
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <Heading/>
                                <Form/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-0 col-md-1 col-lg-2"></div>
                </div>
            </div>
        </div>
    );
}