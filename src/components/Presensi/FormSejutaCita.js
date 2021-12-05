import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const FormSejutaCita = () => {

    const [loading, setLoading] = useState(false);
    const [problem, setProblem] = useState(null);
    const [nama, setNama] = useState();
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState([]);

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

    const onSubmit = formData => {
        setLoading(true);

        fetch('https://api.sectionrpl.com/absen-peserta-terdaftar', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type':'application/json' },
        })
        .then((response) => {
            if (!response.ok) {
                return response.text().then(text => {throw new Error(text)})
            }
            return response.json();
        })
        .then((data) => {
            setNama(data.data);
            setShow(true);
            setProblem(false);
            setLoading(false);
        })
        .catch((err) => {
            setMessage(JSON.parse(err.message).message);
            setShow(false);
            setProblem(true);
            setLoading(false);
        })
    }

    return (
        <>
            <h4 id="subtitle">Presensi Khusus Pendaftar dari SejutaCita</h4>
            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate="noValidate">
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
                {problem &&
                    <div className="alert alert-danger" role="alert">
                        {message}
                    </div>
                }
                {show && 
                    <div id="success" className="alert alert-warning" role="alert">
                        <strong>Berhasil tersimpan !</strong> <br/> <br/> 
                        Terima Kasih <strong>{nama}</strong> telah hadir dalam kegiatan Section Talks #2, sampai jumpa di kegiatan Section Talks #3 pekan depan
                    </div>
                }
                <span>
                    <button 
                        type="submit" 
                        className="btn btn-warning" 
                    >
                        SUBMIT
                    </button>
                    {loading && 
                    <div className="spinner-border text-warning" role="status" aria-hidden="true"></div>
                    }
                </span>
            </form>
        </>
    );
}