function InputField({ label, id, value, onChange }) {
    return (
        <div className='form-control'>
            <label htmlFor={id}>{label}</label>
            <input
                type='number'
                id={id}
                defaultValue={value} // ✅ Usamos value en lugar de defaultValue
                onChange={onChange}
            />
        </div>
    );
}

export default function UserInput({ values, onInputChange }) {
    console.log(values);
    return (
        <section id='user-input' className="input-group">
            {values.map((value, index) => (
                <InputField
                    key={index}
                    label={value.label}
                    id={value.id}
                    value={value.value}
                    onChange={onInputChange}
                />
            ))}
        </section>
    );
}
