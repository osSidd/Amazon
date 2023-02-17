import { useEffect, useState } from "react";

export default function useFetch(){

    const [formData, setFormData] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000')
        .then(res => res.json())
        .then(data => {
            setFormData(data);
        })
    }, [])

    function handleChange(e, field){
        const {name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                [name]: value
            }
        }))
    }

    function submitForm(e){
        e.preventDefault()
        fetch('http://localhost:3000/api/product', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err.message))
    }

    function formatStr(str){
        return str.split('_').join(' ').toUpperCase()
    }

    return {
        formData,
        handleChange,
        submitForm,
        formatStr
    }
}