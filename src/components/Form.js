import React, {useState} from "react";
import {useHistory} from "react-router-dom"

const Form = (props) => {
    let history = useHistory()
    const [form, setForm] = useState({
        name: ''
    })
    const handleCheckbox = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.checked
        })
    }
    const handleForm = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    return (
        <div>
            <h1> Pizza</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                props.setOrder(form)
                history.push('/confirmation')
            }}>
                <input required onChange={handleForm} value={form.name}
                    type='text'
                    min={2}
                    name='name'
                    placeholder='Name'
                    
                />
                <select required name="size" placeholder="Select Size" onChange={handleForm}>
                    <option >________SELECT SIZE________</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='xLarge'>Extra Large</option>
                </select>

                <h3>Toppings</h3>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='pepperoni'
                    value='pepperoni'
                    checked={form.pepperoni ===true}
                />
                <label htmlFor='pepperoni'>Pepperoni</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='beef'
                    value='beef'
                    checked={form.beef === true}
                />
                <label htmlFor='Beef'>Beef</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='veggie'
                    value='veggie'
                    checked={form.veggie === true}
                />
                <label htmlFor='veggie'>Veggie</label>
                <input onChange={handleCheckbox}
                    type='checkbox'
                    name='chicken'
                    value='chicken'
                    checked={form.chicken === true}
                />
                <label htmlFor='chicken'>Chicken</label>

                <h3>Special Instructions</h3>
                <input  onChange={handleForm}
                    type='text'
                    name='instructions' 
                    placeholder='Instructions'
                />
                <button>Submit Order</button>
            </form>
        </div>
    );
};
export default Form; 
