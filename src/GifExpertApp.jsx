import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //formas de validar si un elemento existe
        if (categories.includes(newCategory)) return;
        //otra forma de validar si existe el elemento

        //formas de agregar elementos
        //1a forma
        setCategories([newCategory, ...categories]);
        //2da forma
        // setCategories(cat=>[...cat, 'Valor']);
    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)} // o  onNewCategory={onAddCategory} 
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
