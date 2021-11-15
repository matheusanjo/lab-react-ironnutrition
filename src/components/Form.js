import { useState } from "react";

function Form(props) {
    const [formData, setFormData] = useState({
        name: '',
        calories: 0,
        image: '',
    });

    function handleChange(event) {
        let value = event.target.value;

        if (event.targe.name === 'calories') {
            value = event.target.valueAsNumber;
        }
        setFormData({ ...formData, [event.target.name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        props.setFoods([...props.foods, formData]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Food Name</label>
                <div className="control">
                    <input
                        className="input"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                    />
                </div>
            </div>
            
            <div className="field">
                <label className="label">Food Calories</label>
                <div className="control">
                    <input
                        type="number"
                        className="input"
                        name="calories"
                        onChange={handleChange}
                        value={formData.calories}
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Food Image</label>
                <div className="control">
                    <input
                        className="input"
                        name="image"
                        onChange={handleChange}
                        value={formData.image}
                    />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    {/* O clique no botão com type="submit" que está dentro de um <form> faz com que o <form> dispare um evento do tipo Submit contendo todas as informações do formulário */}
                    <button type="submit" className="button is-link">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;