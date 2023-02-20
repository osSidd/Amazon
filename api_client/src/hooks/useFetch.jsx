import { useEffect, useState } from "react";

export default function useFetch(){

    const [formData, setFormData] = useState({})

    useEffect(() => {
        fetch(import.meta.env.VITE_URL)
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

    async function submitForm(e){
        e.preventDefault()
        const response = await fetch(import.meta.env.VITE_URL, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(response.ok){
            console.log(json)
        }
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
