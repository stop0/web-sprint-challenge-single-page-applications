import React, {useState} from "react";
import {useHistory} from "react-router-dom"

const Form = (props) => {

    const { setOrder } = props



    let history = useHistory()
    const [form, setForm] = useState({
        Name: ""
    })

    const handleSubmit = (event) =>{

        event.preventDefault()
        setOrder(form)
        history.push('/confirmation')



    }

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
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleForm} 
                    value={form.Name}
                    type='text'
                    min={2}
                    name='Name'
                    placeholder='Name'
                    
                />
                <select required name="size" 
                    placeholder="Select Size" 
                    onChange={handleForm}>
                    <option >________SELECT SIZE________</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra Large'>Extra Large</option>
                </select>

                <h3>Toppings</h3>
                <input 
                    onChange={handleCheckbox}
                    type='checkbox'
                    name='Pepperoni'
                    value='Pepperoni'
                    checked={form.Pepperoni ===true}
                />
                <label htmlFor='pepperoni'>Pepperoni</label>
                <input 
                    onChange={handleCheckbox}
                    type='checkbox'
                    name='Beef'
                    value='Beef'
                    checked={form.Beef === true}
                />
                <label htmlFor='Beef'>Beef</label>
                <input 
                    onChange={handleCheckbox}
                    type='checkbox'
                    name='Veggie'
                    value='Veggie'
                    checked={form.Veggie === true}
                />
                <label htmlFor='veggie'>Veggie</label>
                <input 
                    onChange={handleCheckbox}
                    type='checkbox'
                    name='Chicken'
                    value='Chicken'
                    checked={form.Chicken === true}
                />
                <label htmlFor='chicken'>Chicken</label>

                <h3>Special Instructions</h3>
                <input  onChange={handleForm}
                    type='text'
                    name='Instructions' 
                    placeholder='Instructions'
                />
                <button>Submit Order</button>
            </form>
        </div>
    );
};
export default Form; 
