import React, { useEffect, useState } from "react";




 function Form(props) {
  const { formValues, change, submit, Disabled } = props;
  return (
    <div>
        <form onSubmit={onSubmit}>
        <div>
            <div>{formErrors.name}</div>
            <div>{formErrors.pizzaSize}</div>
        </div>
        <label>
            Name:
            <input 
            value={form.name}
            onChange={onChange}
            name='name'
            type='text'
            />
        </label>
        <label>
            Pizza Size:
            <select id='size' onChange={onChange} value={form.pizzaSize} name='pizzaSize'>
                <option value=''>==Select a size</option>
                <option value='large'>Large</option>
                <option value='medium'>medium</option>
                <option value='small'>small</option>
            </select>
        </label>
        <label>
            Cheese
            <input
                type="checkbox"
                name="cheese"
                checked={form.cheese}
                onChange={onChange}
            />
        </label>
        <label>
            Chicken
            <input
                type="checkbox"
                name="chicken"
                checked={form.chicken}
                onChange={onChange}
            />
        </label>

        <label>
            Peperoni
            <input
                type="checkbox"
                name="peperoni"
                checked={form.peperoni}
                onChange={onChange}
            />
        </label>
        <label>
            Special Instructions:
            <input 
            value={form.text}
            onChange={onChange}
            name='text'
            type='text'
            />
        </label>
        <button id='submit-btn' disabled={disabled}>Order</button>
        </form>
        <div>
            {orders.map(item => 
             <div key={item.id}>
                <h1>Name: {item.name}</h1>
                <p>Special Instructions: {item.text}</p>
                <p>Size: {item.pizzaSize}</p>
                <p>Toppings: {item.toppings}</p>
                <p>Order Date: {item.createdAt}</p>
             </div>)}
        </div>
    </div>
)
}

export default Form