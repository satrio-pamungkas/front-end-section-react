import { Alert } from '../components/Register/Alert';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Register = () => {
    // const validationSchema = Yup.object().shape({
    //     name: Yup.string()
    //         .required('Nama wajib diisi'),
    //     jenisKelamin: Yup.string()
    //         .required('Jenis kelamin wajib diisi'),
    //     email: Yup.string()
    //         .required('Alamat surel wajib diisi')
    //         .email('Alamat surel tidak valid'),
    //     noWhatsapp: Yup.string()
    //         .required('Nomor WhatsApp wajib diisi'),
    //     institusi: Yup.string()
    //         .required('Institusi wajib diisi'),
    //     profesi: Yup.string()
    //         .required('Profesi wajib diisi'),
    //     domisili: Yup.string()
    //         .required('Domisili wajib diisi')
    // });

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nama wajib diisi'),
        email: Yup.string()
            .required('Alamat surel wajib diisi')
            .email('Alamat surel tidak valid')
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
    }

    return (
        <div className="register">
            <div className="container register">
                <Alert/>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group name">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input 
                            name="name"
                            type="text" 
                            className="form-control" 
                            id="validationServer03" 
                            placeholder="Alamat Surel" 
                            aria-describedby="validationServer03Feedback" 
                            {...register('name')} 
                        />
                        <div id="validationServerUsernameFeedback" className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                    <div className="form-floating email">
                        <input 
                            name="email"
                            type="email" 
                            className="form-control"
                            id="floatingInputInvalid" 
                            placeholder="name@example.com" 
                            {...register('email')}
                        />
                        <label htmlFor="floatingInputInvalid">Invalid input</label>
                    </div>
                    <button type="submit" className="btn btn-warning">Daftar</button>
                </form>
            </div>
        </div>
    );
}