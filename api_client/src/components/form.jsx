import useFetch from "../hooks/useFetch"

export default function Form(){

    const {formData, handleChange, submitForm, formatStr} = useFetch()
   
    return (
        <form onSubmit={submitForm}>
            
          <h1 className="text-3xl text-center">Amazon clone api</h1>
                  
            {Object.keys(formData).map(field => {
             
             return (
                <div key={field} className="my-8">
                    <div className="font-semibold mb-3 text-xl">
                        {formatStr(field)}
                    </div>
                    
                    {Object.keys(formData[field]).map(subField => {
                        return (
                            <div key={subField} className="">
                                <label htmlFor={subField}>
                                    {formatStr(subField)}
                                </label>
                                
                                {[
                                    'description',
                                    'details',
                                    'dimensions'
                                 ].includes(subField) ?
                                    
                                 <textarea 
                                    name={subField} 
                                    id={subField}
                                    value={formData[field][subField]}
                                    onChange={e => handleChange(e, field)}
                                    placeholder={formatStr(subField)}
                                 ></textarea> : 
                                    
                                 <input 
                                    type="text" 
                                    name={subField} 
                                    id={subField}
                                    value={formData[field][subField]}
                                    onChange={e => handleChange(e, field)}
                                    placeholder={formatStr(subField)} 
                                 />}
                            </div>)}
                        )}
                </div>)}
            )}
            <button>Submit</button>
        </form>
    )
}