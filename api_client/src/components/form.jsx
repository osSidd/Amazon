import useFetch from "../hooks/useFetch"

export default function Form(){

    const {formData, handleChange, submitForm, formatStr} = useFetch()
   
    return (
        <form onSubmit={submitForm}>
            
          <h1 className="text-3xl text-center mt-4">Amazon clone product api</h1>
                  
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
                                    required={true}
                                 ></textarea> : 
                                    
                                 <input 
                                    type={['mrp', 'selling_price', 'stock'].includes(subField) ? "number" : "text"} 
                                    name={subField} 
                                    id={subField}
                                    value={formData[field][subField]}
                                    onChange={e => handleChange(e, field)}
                                    placeholder={formatStr(subField)}
                                    required={true} 
                                 />}
                            </div>)}
                        )}
                </div>)}
            )}
            <button>Submit</button>
        </form>
    )
}