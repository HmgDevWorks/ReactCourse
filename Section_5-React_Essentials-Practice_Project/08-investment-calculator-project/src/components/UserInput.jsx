function InputField({ label, id, value, onChange }) {
    return (
        <p className='form-control'>
            <label htmlFor={id}>{label}</label>
            <input
                type='number'
                id={id}
                defaultValue={value}
                onChange={onChange}
                required
            />
        </p>
    );
}

export default function UserInput({ values, onInputChange }) {
    return (
        <section id='user-input'>
            <div className="input-group">
                {values.map((value, index) => (
                    <InputField
                        key={index}
                        label={value.label}
                        id={value.id}
                        value={value.value}
                        onChange={onInputChange}
                    />
                ))}
            </div>
        </section>
    );
}
