import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const FormSejutaCita = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('E-Mail Wajib diisi')
            .email('Alamat E-Mail tidak valid')
    });

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    })

    return (
        <>
            <h4 id="subtitle">Presensi Khusus Pendaftar dari SejutaCita</h4>
            <form className="form" onSubmit={handleSubmit()} noValidate="noValidate">
                <div className="form-floating">
                    <input 
                        name="email"
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="floatingInputInvalid" 
                        placeholder="Alamat Surel" 
                        {...register('email')}
                    />
                    <label htmlFor="floatingInputInvalid">Alamat Surel</label>
                    <div className="invalid-feedback">
                        {errors.email?.message}
                    </div>
                    <small>Masukan alamat surel (e-mail) yang digunakan saat mendaftar</small>
                </div>
                {/* {problem &&
                    <div className="alert alert-danger" role="alert">
                        Gagal mengisi form, pastikan telah mengisi email yang digunakan saat mendaftar. Silakan ulangi
                    </div>
                } */}
                <span>
                    <button 
                        type="submit" 
                        className="btn btn-warning" 
                    >
                        SUBMIT
                    </button>
                    <div className="spinner-border text-warning" role="status" aria-hidden="true"></div>
                </span>
            </form>
        </>
    );
}