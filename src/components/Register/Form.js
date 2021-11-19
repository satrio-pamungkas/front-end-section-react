import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const Form = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Nama wajib diisi'),
        jenisKelamin: Yup.string()
            .required('Jenis kelamin wajib diisi'),
        email: Yup.string()
            .required('Alamat surel wajib diisi')
            .email('Alamat surel tidak valid'),
        noWhatsapp: Yup.string()
            .required('Nomor WhatsApp wajib diisi'),
        institusi: Yup.string()
            .required('Institusi wajib diisi'),
        profesi: Yup.string()
            .required('Profesi wajib diisi'),
        domisili: Yup.string()
            .required('Domisili wajib diisi')
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
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate="novalidate">
            <div className="form-floating">
                <input 
                    name="name"
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="floatingInputInvalid" 
                    placeholder="Nama Lengkap" 
                    {...register('name')}
                />
                <label htmlFor="floatingInputInvalid">Nama Lengkap</label>
                <div className="invalid-feedback">
                    {errors.name?.message}
                </div>
            </div>
            <div className="form-group">
                <select 
                    className={`form-select ${errors.jenisKelamin ? 'is-invalid' : ''}`} 
                    aria-label="Default select example"
                    {...register('jenisKelamin')}
                >
                    <option value="" disabled selected hidden>Pilih Jenis Kelamin</option>
                    <option value="Laki-Laki">Laki-Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select>
                <div className="invalid-feedback">
                    {errors.jenisKelamin?.message}
                </div>
            </div>
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
            </div>
            <div className="form-floating">
                <input 
                    name="noWhatsapp"
                    type="number"
                    className={`form-control ${errors.noWhatsapp ? 'is-invalid' : ''}`}
                    id="floatingInputInvalid" 
                    placeholder="Nomor WhatsApp" 
                    {...register('noWhatsapp')}
                />
                <label htmlFor="floatingInputInvalid">Nomor WhatsApp</label>
                <div className="invalid-feedback">
                    {errors.noWhatsapp?.message}
                </div>
            </div>
            <div className="form-floating">
                <input 
                    name="institusi"
                    type="text"
                    className={`form-control ${errors.institusi ? 'is-invalid' : ''}`}
                    id="floatingInputInvalid" 
                    placeholder="Institusi" 
                    {...register('institusi')}
                />
                <label htmlFor="floatingInputInvalid">Institusi</label>
                <div className="invalid-feedback">
                    {errors.institusi?.message}
                </div>
            </div>
            <div className="form-floating">
                <input 
                    name="profesi"
                    type="text"
                    className={`form-control ${errors.profesi ? 'is-invalid' : ''}`}
                    id="floatingInputInvalid" 
                    placeholder="Profesi atau Jabatan" 
                    {...register('profesi')}
                />
                <label htmlFor="floatingInputInvalid">Profesi atau Jabatan</label>
                <div className="invalid-feedback">
                    {errors.profesi?.message}
                </div>
            </div>
            <div className="form-floating">
                <input 
                    name="domisili"
                    type="text"
                    className={`form-control ${errors.domisili ? 'is-invalid' : ''}`}
                    id="floatingInputInvalid" 
                    placeholder="Domisili" 
                    {...register('domisili')}
                />
                <label htmlFor="floatingInputInvalid">Domisili</label>
                <div className="invalid-feedback">
                    {errors.domisili?.message}
                </div>
            </div>
            <button type="submit" className="btn btn-warning">Daftar</button>
        </form>

    );
}